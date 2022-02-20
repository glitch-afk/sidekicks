import Head from 'next/head'
import Leaderboard from '../Leaderboard'

export default function ThisKick() {
  return (
    <div className="text-white flex w-full h-screen items-center justify-between py-2 space-y-3 snap-start">
      <div className='flex w-full h-[65vh] flex-col items-start justify-center py-2 space-y-3 px-16'>
        <h1 className='text-white font-clash font-bold text-4xl md:text-6xl xl:text-8xl w-3/4'>KICKS DROPPED THIS WEEK</h1>
        <h1 className='text-white font-inter font-semibold text-xl lowercase cursor-pointer'>{`Explore All -->`}</h1>
      </div>
      <div className='px-16 w-1/2'>
        <Leaderboard></Leaderboard>
      </div>
    </div>
  )
}