import Header from "../components/Header";

const About = () => {
    return (
        <div>
            <Header />

            <div className="max-w-5xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold mb-6">
                    About BlogCraft ✍️
                </h1>

                <p className="text-lg text-gray-600 leading-8">
                    BlogCraft is a modern blogging platform where writers
                    can share their ideas, publish articles, and connect
                    with readers.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    <div className="border rounded-xl p-6">
                        <h2 className="text-xl font-semibold">
                            Create
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Write and publish your thoughts easily.
                        </p>
                    </div>


                    <div className="border rounded-xl p-6">
                        <h2 className="text-xl font-semibold">
                            Explore
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Discover blogs from different creators.
                        </p>
                    </div>


                    <div className="border rounded-xl p-6">
                        <h2 className="text-xl font-semibold">
                            Connect
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Build a community around your content.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;