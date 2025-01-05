import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(197,204,223)] w-auto h-auto">
      <div className="flex">
        <div className="pl-20 pt-20">

          {/* Vision */}
          <div className="border-2 border-black rounded-md w-100 h-40 px-8 py-4">
            <h2 className="text-white text-center bg-[rgb(33,33,114)] text-lg font-bold">VISION</h2>
            <p className="py-8 text-justify">The University of Relevance leading to
            Techno-Preneural Excellence.</p>
          </div>

          {/* Mission */}
          <div className="border-2 border-black rounded-md w-100 h-60 px-8 py-4 mt-10">
            <h2 className="text-white text-center bg-[rgb(33,33,114)] text-lg font-bold">MISSION</h2>
            <p className="py-8 text-justify">Dawood University of Engineering & Technology aims to invest in human capital for accelerated advancement in engineering knowledge and practices, new frontiers in R&D hence creating knowledge-led economy and better future for generations to come.</p>
          </div>  
        </div>

        <Image className="scale-up-center pt-[90px] mr-16 ml-[140px] w-[580px] h-[480px]" 
          src="/duet.png"
          alt="img"
          width={728}
          height={420}/>
      </div>   

      <div className="flex gap-36 pl-20">

        {/* Goals */}
        <div className="border-2 border-black rounded-md w-[490px] h-auto px-8 py-3 my-10">
          <h2 className="text-white text-center bg-[rgb(33,33,114)] text-lg font-bold">GOALS</h2>
          <ul className="list-disc py-8 text-justify">
            <li>Help place-bound students achieve their
            educational aspirations.</li>
            <li>Expand public engagement to contribute to economic and cultural vitality and to the health and quality of life of people of Pakistan</li>
            <li>Graduate education and training that prepares students for interdisciplinary engineering research and advanced problem solving.</li>
            <li>Align university resources with important state needs to promote multidisciplinary research.</li>
            <li>Create knowledge base that integrates technical expertise, communication skills and team building; required for commercialization of research.</li>
          </ul>
        </div>
            
        {/* Objectives */}
        <div className="border-2 border-black rounded-md w-[490px] h-100 px-8 py-4 my-10">
          <h2 className="text-white text-center bg-[rgb(33,33,114)] text-lg font-bold">OBJECTIVES</h2>
          <ul className="list-disc py-8 text-justify">
            <li>Establish contemporary and rigorous educational units and practices that produce well rounded engineers.</li>
            <li>Create an atmosphere that facilitates personal commitment to the educational success of students in an environment that values diversity and community.</li>
            <li>Develop education and research partnerships with targeted agencies, universities, and industries.</li>
            <li>Foster Highly successful alumni who contribute to the Profession in the global society.</li>
            <li>Conduct internationally recognized research programs.</li>
            <li>Preferred avenue for the industry to seek solutions and technical advice.</li>
            <li>Emerge as think tank for Government for prudent and accountable resource management.</li>
          </ul>
        </div>
        
      </div>     
    </div>
  );
}