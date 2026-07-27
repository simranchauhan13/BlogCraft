import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { format } from "date-fns";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Header /> 
            <div  className="flex justify-center">
                <div className="w-3/5 ">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    } 
    return <div >
        <Header></Header>

        <div  className="flex justify-center bg-slate-50 ">
            <div className="w-3/5">
                {
                blogs
                    .map(blog => <BlogCard
                        key={blog.id}
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={format(new Date(blog.createdAt), "dd-MMM-yyyy")}
                    />)
                }
            
            </div>
        </div>
        <Footer></Footer>
    </div>
}

