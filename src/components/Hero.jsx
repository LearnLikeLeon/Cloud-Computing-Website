// hit 'rafce'
import React from 'react'

// Let's import some icons :

import {

    IdentificationIcon,
    FolderIcon,
    GlobeAltIcon,
    ChipIcon,
    WifiIcon ,
    CodeIcon,
    DesktopComputerIcon,
    DatabaseIcon,

    // CloudUploadIcon,
    // PaperAirplaneIcon,
    // ServerIcon,
} from '@heroicons/react/solid'

// import bgImg from '../assets/cyber-bg.png'
import cloud_2 from '../assets/cloud-computing-2.jpg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>

        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique, Interactive & Free</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold italic'>Cloud Computing Training</h1>
                <p className='text-2xl'>AWS Batch 5_Training Session</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>

            <div>
                {/* <img className='w-full' src={bgImg} alt="/" /> */}
                <img className='w-full rounded-3xl' src={cloud_2} alt="/" />
            </div>
            
            <div className='absolute hidden sm:flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>

                <p>AWS Services covered by this training :</p>

                {/* Data Services Icons or Logos :*/}
                <div className='flex justify-between flex-wrap px-4'>

                    <p className='flex px-4 py-2 text-slate-500'><IdentificationIcon className='h-6 text-indigo-600' /> AWS IAM </p>
                    <p className='flex px-4 py-2 text-slate-500'><FolderIcon className='h-6 text-indigo-600' /> Amazon Simple Storage Service</p>
                    <p className='flex px-4 py-2 text-slate-500'><GlobeAltIcon className='h-6 text-indigo-600' /> Amazon CloudFront</p>
                    <p className='flex px-4 py-2 text-slate-500'><ChipIcon className='h-6 text-indigo-600' /> Amazon EC2</p>
                    <p className='flex px-4 py-2 text-slate-500'><ChipIcon className='h-6 text-indigo-600' /> AWS AutoScaling</p>
                    <p className='flex px-4 py-2 text-slate-500'><ChipIcon className='h-6 text-indigo-600' /> Amazon Elastic Load Balancer</p>
                    <p className='flex px-4 py-2 text-slate-500'><WifiIcon className='h-6 text-indigo-600' /> AWS Networking</p>
                    <p className='flex px-4 py-2 text-slate-500'><CodeIcon className='h-6 text-indigo-600' /> AWS Lambda</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Amazon RDS</p>
                    <p className='flex px-4 py-2 text-slate-500'><DesktopComputerIcon className='h-6 text-indigo-600' /> Terraform</p>

                    {/*  

                        <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
                        <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                        <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                        <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>

                    */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero