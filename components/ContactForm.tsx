export type ContactData = {
    fname: string,
    lname?: string,
    email: string;
    subject: string;
    message?: string;
}

export type ContactFormProps = {
    onSubmit?: (contact: ContactData) => void
}


const ContactForm = () => {

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form Submit");
    }

    return <div className="overflow-hidden w-full">
        <form onSubmit={formSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col justify-center  md:flex-row gap-5 md:items-center">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text uppercase">first name</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                    <input type="text" required placeholder="Ex. Shivam" className="input input-bordered w-full max-w-xs" />
                    {/* <label className="label">
                    <span className="label-text-alt">Alt label</span>
                    <span className="label-text-alt">Alt label</span>
                </label> */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text uppercase">Last name</span>
                    </label>
                    <input type="text" placeholder="Ex. Singh" className="input input-bordered w-full max-w-xs" />
                    {/* <label className="label">
                    <span className="label-text-alt">Alt label</span>
                    <span className="label-text-alt">Alt label</span>
                </label> */}
                </div>
            </div>
            <div className="flex flex-col justify-center  md:flex-row gap-5 md:items-center">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text uppercase">Subject</span>
                    </label>
                    <input required type="email" placeholder="example@mail.com" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text uppercase">Email</span>
                    </label>
                    <input required type="text" placeholder="Your Subject" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text uppercase">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" rows={20} placeholder="Bio"></textarea>
            </div>

            <div className="flex items-center justify-end">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
}

export default ContactForm;