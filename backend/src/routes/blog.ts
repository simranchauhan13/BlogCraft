import { Router } from "express";
import { prisma } from "../lib/prisma";
import { createBlogInput, updateBlogInput } from "@govinda03/medium-common";
import { authMiddleware, AuthRequest } from "../middleware/auth";


export const blogRouter = Router();



blogRouter.use(authMiddleware);



blogRouter.post("/", async(req:AuthRequest,res)=>{

    const body=req.body;


    const {success}=createBlogInput.safeParse(body);


    if(!success){
        return res.status(411).json({
            message:"Inputs not correct"
        });
    }


    try{

        const blog = await prisma.blog.create({

            data:{
                title:body.title,
                content:body.content,
                authorId:req.userId!,
                authorName:body.authorName || "Anonymous"
            }

        });


        return res.json({
            id:blog.id
        });


    }catch(e){

        console.log(e);

        return res.status(403).json({
            message:"Error Creating Blog Post"
        });

    }

});





blogRouter.put("/", async(req:AuthRequest,res)=>{


    const body=req.body;


    const {success}=updateBlogInput.safeParse(body);


    if(!success){
        return res.status(411).json({
            message:"Inputs not correct"
        });
    }



    const blog = await prisma.blog.update({

        where:{
            id:body.id
        },

        data:{
            title:body.title,
            content:body.content
        }

    });


    return res.json({
        id:blog.id
    });


});





blogRouter.get("/bulk", async(req,res)=>{


    try{

        const blogs = await prisma.blog.findMany({

            select:{
                content:true,
                title:true,
                id:true,
                createdAt:true,

                author:{
                    select:{
                        name:true
                    }
                }
            }

        });


        return res.json({
            blogs
        });


    }catch(e){

        return res.status(403).json({
            message:"Error fetching blogs"
        });

    }


});





blogRouter.get("/:id", async(req,res)=>{


    const id = Number(req.params.id);



    try{

        const blog = await prisma.blog.findFirst({

            where:{
                id
            },

            select:{
                content:true,
                title:true,
                id:true,
                createdAt:true,

                author:{
                    select:{
                        name:true
                    }
                }
            }

        });



        return res.json({
            blog
        });


    }catch(e){

        return res.status(411).json({
            message:"Error while fetching blog post"
        });

    }


});