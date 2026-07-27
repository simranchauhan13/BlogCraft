import Header from "../components/Header";

const Contact = () => {
    return (
        <div>
            <Header />

            <div className="max-w-3xl mx-auto px-6 py-16">

                <h1 className="text-5xl font-bold mb-6">
                    Contact Us 📩
                </h1>

                <p className="text-gray-600 text-lg">
                    Have questions or feedback? We'd love to hear from you.
                </p>


                <div className="mt-8 border rounded-xl p-6">

                    <p className="mb-3">
                        Email:
                    </p>

                    <p className="font-semibold">
                        support@blogcraft.com
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Contact;