import { Router } from "express";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";
import { signupInput, signinInput } from "@simranchauhan/medium-common";
export const userRouter = Router();


userRouter.post("/signup", async (req, res)=>{

    const body = req.body;

    const {success} = signupInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message:"Inputs not correct"
        });
    }


    try{

        const user = await prisma.user.create({
            data:{
                username: body.username,
                password: body.password,
                name: body.name
            }
        });


        const token = jwt.sign(
            {
                id:user.id,
                name:user.name
            },
            process.env.JWT_SECRET!
        );


        return res.json({
            jwt: token
        });


    }catch(e){

    console.error("SIGNUP ERROR:", e);

    return res.status(500).json({
        message:"Signup failed",
        error: String(e)
    });
}

});





userRouter.post("/signin", async(req,res)=>{

    const body=req.body;


    const {success}=signinInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message:"Inputs not correct"
        });
    }


    try{

        const user = await prisma.user.findFirst({
            where:{
                username:body.username,
                password:body.password
            }
        });


        if(!user){
            return res.status(403).json({
                message:"Incorrect Credentials"
            });
        }


        const token = jwt.sign(
            {
                id:user.id,
                name:user.name
            },
            process.env.JWT_SECRET!
        );


        return res.json({
            jwt:token
        });


    }catch(e){

        return res.status(500).json({
            message:"Signin failed"
        });

    }

});