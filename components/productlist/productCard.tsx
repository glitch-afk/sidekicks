export const ProductCard = () => {
    const MAX_lENGTH = 100;
    const text = "Lorem ipsum dolor sit amellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius sint asperiores debitis recusandae corrupti animi. Magni laboriosam, harum nisi aliquam facere earum excepturi ratione velit temporibus ipsam sunt amet lorem30  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste provident amet sed, enim necessitatibus nemo? Obcaecati nostrum qui ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam amet fuga ea aperiam unde accusamus omnis qui quas consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci debitis voluptatum dolor possimus quidem r.. "
    const pera = text.length > MAX_lENGTH ? <p>{text} ...<a href="">Read More</a></p> : <p>{text}</p>


    return (
        <>
            <div className="mycard text-white border-[1px] flex-grow-0 flex-shrink-0 min-h-[600px] border-white w-full rounded-sm m-auto max-w-[400px] 2xl:mx-[25px] mb-[35px]">
                <div className="h-[200px] w-full bg-[#626262] ">
                    {/* here img will go */}
                </div>
                <div className=" flex grow-0 shrink-0  flex-col  p-4">
                    <h2 className="mb-3 text-[1.2rem]">project Title </h2>
                    <p className="text-[.9rem] text-justify">{pera}</p>
                    <button className=" rounded-lg block text-center bg-[#5451FF] py-3 px-2 w-[95%] m-auto my-[15px]" >view details</button>
                </div>

            </div>
        </>
    )
}