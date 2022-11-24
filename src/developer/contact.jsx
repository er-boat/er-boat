import { AiFillGoogleCircle,AiFillLinkedin,AiOutlineGithub,AiFillPhone,AiOutlineTwitter } from "react-icons/ai";

const Contact=()=>{
    return (
        <div>
            <div className="h-[200px] w-[200px] relative overflow-clip">
                <div className="dome h-[1900px] w-[2000px] bg-slate-200 shadow-2xl rounded-full flex  justify-start ">
                        
                </div>
                
            </div> 
            <div className="domeoverlay h-[50px] w-screen mb-0  flex justify-center gap-7">
                        <h1 className="bg-slate-200 shadow-2xl text-3xl">{<AiFillGoogleCircle/>}</h1>
                        <h1 className="bg-slate-200 shadow-2xl text-3xl">{<AiFillLinkedin/>}</h1>
                        <h1 className="bg-slate-200 shadow-2xl text-3xl">{<AiFillPhone/>}</h1>
                        <h1 className="bg-slate-200 shadow-2xl text-3xl">{<AiOutlineGithub/>}</h1>
                        <h1 className="bg-slate-200 shadow-2xl text-3xl">{<AiOutlineTwitter/>}</h1> 
                </div> 
        </div>
    );
}

export default Contact;