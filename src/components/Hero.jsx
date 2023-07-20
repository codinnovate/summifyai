import Header from './Header'

const Hero = () => {
    return (
        <div className='flex flex-col'>
            <Header />

            <div className='flex flex-col  items-center'>
                <h1 className='head_text '>Your Time-Saving Content Companion with <br className='max-md:hidden' />  <span className='orange_gradient text-bold'>OpenAi GPT-5</span></h1>
                <h2 className='desc'>Harness Artificial Intelligence to Summarize, Comprehend, and Simplify Information</h2>
            </div>
        </div>
    )
}

export default Hero
