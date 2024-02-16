import { Github, Linkedin, Twitter } from "lucide-react"



const Footer = () => {
    return (
        <section className=' py-6  border-t-2 border-dashed border-white dark bg-background text-foreground'>
            <div className="w-full flex justify-center gap-5">
                <a className="hover:text-gray-400" target="_blank" href="https://www.linkedin.com/in/wesam-lafi-0623521b7/">

                    <Linkedin /> 
                </a>
                <a className="hover:text-gray-400" target="_blank" href="https://twitter.com/WesamLF">
                    <Twitter />
                </a>
                <a className="hover:text-gray-400"  target="_blank" href="https://github.com/wesamLF">

                    <Github />
                </a>


            </div>
        </section>
    )
}

export default Footer