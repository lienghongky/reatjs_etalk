import React, { Children, useState } from 'react';
import { useSelector } from 'react-redux';

const Student = () => {

    const globalFeatures = useSelector(e=>e.studentStore.features)

    const [features,setFeatures] = useState([{
        id:1,
        img:"https://www.flatja.com/templates/dev4/images_cust/f_feature1.png",
        title:"Learn Anytime &amp; Anywhere$",
        subtitle:"You can book your lesson and enjoy your lesson whenever and wherever you want."

    },
    {
        id:2,
        img:"https://www.flatja.com/templates/dev4/images_cust/f_feature2.png",
        title:"Qualified Teacher",
        subtitle:"All our teachers are qualified and native speakers with Japanese teaching certification. Most teachers have Japanese teaching experience more than five years and speak English."

    },
    {
        id:3,
        img:"https://www.flatja.com/templates/dev4/images_cust/f_feature3.png",
        title:"Low Cost High Quality",
        subtitle:"Our lesson fee starts at ONLY 3$"

    },
    {
        id:4,
        img:"https://www.flatja.com/templates/dev4/images_cust/f_feature4.png",
        title:"Selected Textbook",
        subtitle:"To fit your needs, We provide all kind of selected textbooks from Daily speaking textbooks to business Japanese textbooks.Textbooks we use are well selected and provide for students for free."

    }]);

    const [services,setServices] = useState([
        {
            id:1,
            name:"ANA Inc.",
            img:"https://www.flatja.com/assets/modules/appointments/images/services/service1.jpg",
            tag:"Airways"
        },
        {
            id:2,
            name:"Apple Inc.",
            img:"https://www.flatja.com/assets/modules/appointments/images/services/service2.jpg",
            tag:"IT"
        },
        {
            id:3,
            name:"Goole Inc.",
            img:"https://dev4.flatja.com/assets/modules/appointments/images/services/service3.jpg",
            tag:"IT"
        },
        {
            id:4,
            name:"Microsoft Inc.",
            img:"https://dev4.flatja.com/assets/modules/appointments/images/services/service4.jpg",
            tag:"IT"
        },
        {
            id:5,
            name:"NEC Inc.",
            img:"https://dev4.flatja.com/assets/modules/appointments/images/services/service5.jpg",
            tag:"IT"
        }
    ])
   
    return (
    <>
         <div className="flex justify-center">
            <h2 className="section-title">Features Of Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:px-32">
            {
               globalFeatures.map((e,index)=>(
                   
                <div key={e.id} className="flex flex-col justify-center h-full">
                        <div className="w-full flex justify-center items-center p-4">
                                <img src={e.img} className="w-32 h-32 object-contain" />
                            </div>
                    <div className="flex-1 py-4 flex">
                        <div className="p-4 text-2xl font-bold text-white bg-yellow-500 flex justify-center items-center">{e.id}</div>
                        <div className="pl-2">
                            <p className="feature-title">{e.title}</p>
                            <p className="feature-subtitle">{e.subtitle}</p>
                        </div>
                    </div>
                </div>        
                ))               
            }
        </div>


        <section>
        <div className="fullwidth-block" data-bg-color="#f1f1f1">
            <h2 className="section-title">Companies strengthening Japanese</h2>
                <div className="flex flex-wrap px-2 lg:px-32">
                {
                    services.map((e,index)=>(
                    <div key={e.id} className="w-full sm:w-1/5 p-4">
                        <div className="offer caption-bottom ">
                            <div className="w-full flex items-center justify-center">
                                <img className="object-cover w-32 h-32 border border-orange-500 rounded-full transition duration-500 transform scale-100 hover:scale-110" src={e.img}/>
                            </div>
                            <div className="text-left flex flex-col items-center justify-center ">
                                <a className="py-4" href="services/view/id/2">
                                    <h2 className="offer-title text-black hover:text-yellow-800 align-start"><span className="bg-yellow-500 text-white px-2 py-1 text-sm font-bold">{e.id}</span>{e.name}</h2>
                                </a>
                                <p className="text-center">
                                    <a href="services/view/id/2">{e.tag}</a>
                                </p>
                            </div>
                        </div>
                </div>
                ))
            }
                </div> 
       </div>
        <div className="flex justify-center items-center">
            <p className="text-lg font-bold text-blue-700"><a href="services/viewAll">Read More »</a></p>
        </div>
        </section>


        <section>
        <div className="py-10">
            <div className="textwidget text-center pb-6">
            <h2 className="section-title">Features of School</h2>
                <h4 className="content-subtitle">Provide best Japanese teaching service for  1 million people</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 lg:px-32">
                            <div className="relative">
                        <div className="h-full bg-white shadow-md">
                            <div className="w-full h-64 flex justify-center items-center pb-4 border border-t-0 border-l-0 border-r-0">
                            　<img className="w-full h-full object-contain" src="https://dev4.flatja.com/templates/default/customized_template/icons/support/sp1.png" />
                            </div>
                            <div className="p-4">
                                <h2 className="support-title">one to one tutoring</h2>
                                <div className="pb-4">_______</div>
                                <div className="support-subtitle">Teachers and students have one-on-one lessons. Japanese study here is very simple, interesting and effective.</div>
                            </div>

                        </div>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 to-red-500"></div>
                    </div>
                            <div className="relative">
                        <div className="h-full bg-white shadow-md">
                            <div className="w-full h-64 flex justify-center items-center pb-4 border border-t-0 border-l-0 border-r-0">
                            　<img className="w-full h-full object-contain" src="https://dev4.flatja.com/templates/default/customized_template/icons/support/sp2.png" />
                            </div>
                            <div className="p-4">
                                <h2 className="support-title">7x24 service</h2>
                                <div className="pb-4">_______</div>
                                <div className="support-subtitle">In general our system runs at any time of the year. You can book lessons at any time.</div>
                            </div>

                        </div>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 to-red-500"></div>
                    </div>
                            <div className="relative">
                        <div className="h-full bg-white shadow-md">
                            <div className="w-full h-64 flex justify-center items-center pb-4 border border-t-0 border-l-0 border-r-0">
                            　<img className="w-full h-full object-contain" src="https://dev4.flatja.com/templates/default/customized_template/icons/support/sp3.png" />
                            </div>
                            <div className="p-4">
                                <h2 className="support-title">7x24 technical support</h2>
                                <div className="pb-4">_______</div>
                                <div className="support-subtitle">Beginners provide support system. If you have any problems or trips, you can take a quick trip.</div>
                            </div>

                        </div>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 to-red-500"></div>
                    </div>
                            <div className="relative">
                        <div className="h-full bg-white shadow-md">
                            <div className="w-full h-64 flex justify-center items-center pb-4 border border-t-0 border-l-0 border-r-0">
                            　<img className="w-full h-full object-contain" src="https://dev4.flatja.com/templates/default/customized_template/icons/support/sp4.png" />
                            </div>
                            <div className="p-4">
                                <h2 className="support-title">All native teachers</h2>
                                <div className="pb-4">_______</div>
                                <div className="support-subtitle">All teachers are Japanese native. Some are living oversea and provide lessons in different time zones.</div>
                            </div>

                        </div>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 to-red-500"></div>
                    </div>
                    </div> 

        </div>
        </section>


        <section>
        <div>
        <h2 className="section-title py-10">Testimonials</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-32 pt-32">

                        <li className="py-10">
                <div className="flex flex-col content-between bg-white shadow-lg h-full p-4 border border-l-0 border-r-0 border-b-0 border-yellow-500">

                    <div className="mb-auto ">

                        <div className="w-full flex flex-col items-center py-8 -mt-1/2">
                            <img className="w-32 h-32 bg-gray-300 rounded-full object-cover overflow-hidden border-2 border-yellow-500" src="https://dev4.flatja.com/assets/modules/testimonials/images/authors/author_x75jq5bock.jpg" title="Fredrick Keen"/>
                        </div>

                        <blockquote className="flex-1">
                                これは私の最初のレッスンです。非常にべんきょうになりました。 はなしたくさん練習できました。一生懸命勉強します。
                        </blockquote>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a className="text-yellow-500 text-lg py-4">李さん</a>
                        <p className="text-md">学生</p>
                    </div>
                </div>
            </li>
                        <li className="py-10">
                <div className="flex flex-col content-between bg-white shadow-lg h-full p-4 border border-l-0 border-r-0 border-b-0 border-yellow-500">

                    <div className="mb-auto ">

                        <div className="w-full flex flex-col items-center py-8 -mt-1/2">
                            <img className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-2 border-yellow-500" src="https://dev4.flatja.com/assets/modules/testimonials/images/authors/author_q918jg4tae.jpg" title="Fredrick Keen"/>
                        </div>

                        <blockquote className="flex-1">ここの先生は素晴らしいです文法も細かく、今年受験するのでかなり上達しました</blockquote>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a className="text-yellow-500 text-lg py-4">張さん</a>
                        <p className="text-md">学生 </p>
                    </div>
                </div>
            </li>
                        <li className="py-10">
                <div className="flex flex-col content-between bg-white shadow-lg h-full p-4 border border-l-0 border-r-0 border-b-0 border-yellow-500">

                    <div className="mb-auto ">

                        <div className="w-full flex flex-col items-center py-8 -mt-1/2">
                            <img className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-2 border-yellow-500" src="https://dev4.flatja.com/assets/modules/testimonials/images/authors/author_3.jpg" title="Fredrick Keen" />
                        </div>

                        <blockquote className="flex-1 overflow-hidden h-32">
                                I took the lesson of the instructor after a long time. We talked about recent events around us. I would like to increase my expressions and vocabulary so that I can spread the story on various topics. Also thank you next time.                        </blockquote>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a className="text-yellow-500 text-lg py-4">Ayik</a>
                        <p className="text-md">Staff </p>
                    </div>
                </div>
            </li>
                        <li className="py-10">
                <div className="flex flex-col content-between bg-white shadow-lg h-full p-4 border border-l-0 border-r-0 border-b-0 border-yellow-500">

                    <div className="mb-auto ">

                        <div className="w-full flex flex-col items-center py-8 -mt-1/2">
                            <img className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-2 border-yellow-500" src="assets/modules/testimonials/images/authors/" title="Fredrick Keen"/>
                        </div>

                        <blockquote className="flex-1 ">
                                It was very easy to listen to English, and the questions were handled carefully. It was a request less than 24 hours, but it was helpful to answer.                        </blockquote>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a className="text-yellow-500 text-lg py-4">Jack</a>
                        <p className="text-md"> </p>
                    </div>
                </div>
            </li>
                        </ul>
            <div className="flex justify-center items-center py-6">
                <a href="testimonials/viewAll" className="p-2 px-6 m-0 rounded-md" title="Read More &amp;raquo;">
                    <span className="">Read More »</span>
                </a>
            </div>
        </div>
        </section>

        <section>
            <div className="fullwidth-block py-10">
                <h2 className="section-title">Latest News</h2>
                <div className="flex flex-wrap px-2 lg:px-32">
                    <div className="w-full sm:w-1/2 px-4">
                        <div className="news bg-white shadow-lg h-full">
                            <img className="h-64 w-full object-cover overflow-hidden" src="https://dev4.flatja.com/assets/modules/news/images/intro_images/banner1.jpg" />
                            <div className="p-2">
                                <div className="flex px-4 items-center">
                                    <img className="w-4 h-4 mr-2" src="https://dev4.flatja.com/templates/default/customized_template/icons/ic_date.png" />
                                    <p className="text-sm py-2">
                                    2020-11-04                                
                                    <span className="px-4 ">
                                    Views (<a className="cmsms_comments text-blue-300" href="news/view/id/13" title="">124</a> )
                                    </span>
                                    </p>
                                </div>
                                <a href="news/view/id/13"><h2 className="leading-6 text-xl text-gray-700 hover:text-yellow-600 p-2">Top 10 Countries/Areas by Number of Japanese Language Learners</h2></a>
                                <p className="text-yellow-600 p-2">_____________</p>
                                <div className="text-md font-light px-2">
                                    <p>There&nbsp; are 3651715 people in 137 countries or areas learn Japanese.And this number doesn't include those who learn Japanese themselves.So the actual number might be more than this.Below is a list of&nbsp;Top 10 Countries/ar...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-4">
                <div className="news bg-white shadow-lg h-full">
                    <img className="h-64 w-full object-cover overflow-hidden" src="https://dev4.flatja.com/assets/modules/news/images/intro_images/%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89.jfif" />
                    <div className="p-2">
                        <div className="flex px-4 items-center">
                            <img className="w-4 h-4 mr-2" src="https://dev4.flatja.com/templates/default/customized_template/icons/ic_date.png" />
                            <p className="text-sm py-2">
                                2020-10-24                                <span className="px-4 ">
                                    Views (<a className="cmsms_comments text-blue-300" href="news/view/id/12" title="">152</a> )
                                </span>
                            </p>
                        </div>
                        <a href="news/view/id/12"><h2 className="leading-6 text-xl text-gray-700 hover:text-yellow-600 p-2">Renewal of the learning materials database of FlatJa</h2></a>
                        <p className="text-yellow-600 p-2">_____________</p>
                        <div className="text-md font-light px-2">
                            <p>Dear UserWe are glad to introduce the renewal of the learning materials database of FlatJa (http://jp.disanke.com/en/).FlatJa(https://www.flatja.com/) has provided Japanese learners with HIGH quality online Japanese le...</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    <div className="flex justify-center py-10">
        <a href="news/ViewAll" className="button_view_all p-2 px-6 m-0 rounded-md" title="Read More &amp;raquo;">
            <span className="">Read More »</span>
        </a>
    </div>
</div>
    </section>
        <section>
            <div className="flex items-center justify-center">
                <h2 className="section-title"> Our Courses</h2>
            </div>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:px-32">
                    <div className="relative">
                <div className="h-full ">
                    <div className="w-full flex flex-col  lg:justify-between lg:flex-row items-start lg:items-end border-2 border-yellow-600 border-dotted border-t-0 border-l-0 border-r-0">
                    　  <img className="w-32 h-32 sm:w-64 sm:h-64 object-contain rounded-lg" src="https://dev4.flatja.com/templates/default/customized_template/icons/course/course1.png" />
                        <h2 className="w-full flex-1 text-lg font-bold text-yellow-600 text-right">Daily Speaking Course</h2>
                    </div>
                    <div className="pt-4">
                        <div className=" text-lg font-lighttext-right">Learn the most usefull daily speaking Japanese with native teachers,suitable for all level Japanese learner.Especially for people who have plan to live in Japan.</div>
                    </div>
                    
                </div>
            </div>
                    <div className="relative">
                <div className="h-full ">
                    <div className="w-full flex flex-col  lg:justify-between lg:flex-row-reverse  items-end border-2 border-yellow-600 border-dotted border-t-0 border-l-0 border-r-0">
                    　  <img className="w-32 h-32 sm:w-64 sm:h-64 object-contain rounded-lg" src="https://dev4.flatja.com/templates/default/customized_template/icons/course/course2.png" />
                        <h2 className="w-full flex-1 text-lg font-bold text-yellow-600 text-left">Business Course</h2>
                    </div>
                    <div className="pt-4">
                        <div className=" text-lg font-lighttext-left">Learn the useful Japanese in work and Japanese bussiness manner.Suitable for all level Japanese learner.Especially for people who have plan to work in Japan.</div>
                    </div>
                    
                </div>
            </div>
                    <div className="relative">
                <div className="h-full ">
                    <div className="w-full flex flex-col  lg:justify-between lg:flex-row items-start lg:items-end border-2 border-yellow-600 border-dotted border-t-0 border-l-0 border-r-0">
                    　  <img className="w-32 h-32 sm:w-64 sm:h-64 object-contain rounded-lg" src="https://dev4.flatja.com/templates/default/customized_template/icons/course/course3.png"/>
                        <h2 className="w-full flex-1 text-lg font-bold text-yellow-600 text-right">JLPT Course</h2>
                    </div>
                    <div className="pt-4">
                        <div className=" text-lg font-lighttext-right">Learn the grammer and vocabulary for JLPT test.Suitable for all level Japanese learner. Especially people who want to pass the JLPT test.</div>
                    </div>
                    
                </div>
            </div>
                    <div className="relative">
                <div className="h-full ">
                    <div className="w-full flex flex-col  lg:justify-between lg:flex-row-reverse  items-end border-2 border-yellow-600 border-dotted border-t-0 border-l-0 border-r-0">
                    　  <img className="w-32 h-32 sm:w-64 sm:h-64 object-contain rounded-lg" src="https://dev4.flatja.com/templates/default/customized_template/icons/course/course4.png"/>
                        <h2 className="w-full flex-1 text-lg font-bold text-yellow-600 text-left">Customizable Course</h2>
                    </div>
                    <div className="pt-4">
                        <div className=" text-lg font-lighttext-left">By leaving a comment while Booking a lesson, You can customize your class.Our teachers will prepare the lesson that fits your needs.</div>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
            
        <section>
           
           <div className="flex items-center justify-center">
               <h2 className="section-title">Registration Flow</h2>
           </div>
            <div className="w-full flex flex-col items-center lg:px-32 py-8">
                <div className="flex flex-wrap flex-row-reverse justify-center items-center">
                    <div className="w-full sm:w-1/2 ">
                        <img className="w-full sm:w-fullobject-cover overflow-hidden  p-6 text-white" src="https://dev4.flatja.com/templates/default/customized_template/icons/register/step1.png" />
                    </div>
                    <div className="w-full sm:w-1/2 text-center flex">
                        <div className="">
                            <h2 className="py-6 h-auto bg-yellow-600 p-4 text-white text-lg font-bold">step 1</h2>
                        </div>
                        <div className="flex-1 px-4 flex flex-col items-start">
                            <h2 className="step-title">Sign Up For Free</h2>
                            <p className="text-lg py-4">Sign up with simplely with your email address and get your trial lesson.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center lg:px-32 py-8">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-1/2 ">
                        <img className="w-full sm:w-fullobject-cover overflow-hidden  p-6 text-white" src="https://dev4.flatja.com/templates/default/customized_template/icons/register/step2.png" />
                    </div>
                    <div className="w-full sm:w-1/2 text-center flex">
                        <div className="">
                            <h2 className="py-6 h-auto bg-yellow-600 p-4 text-white text-lg font-bold">step 2</h2>
                        </div>
                        <div className="flex-1 px-4 flex flex-col items-start">
                            <h2 className="step-title">Make reservation</h2>
                            <p className="text-lg py-4">Find your favorite teacher and learning content,Make your trial reservation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center lg:px-32 py-8">
                <div className="flex flex-wrap flex-row-reverse justify-center items-center">
                    <div className="w-full sm:w-1/2 ">
                        <img className="w-full sm:w-fullobject-cover overflow-hidden  p-6 text-white" src="https://dev4.flatja.com/templates/default/customized_template/icons/register/step3.png" />
                    </div>
                    <div className="w-full sm:w-1/2 text-center flex">
                        <div className="">
                            <h2 className="py-6 h-auto bg-yellow-600 p-4 text-white text-lg font-bold">step 3</h2>
                        </div>
                        <div className="flex-1 px-4 flex flex-col items-start">
                            <h2 className="step-title">Enjoy trial lesson</h2>
                            <p className="text-lg py-4">Our teacher will contact before the lesson and deliver the lesson on time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center lg:px-32 py-8">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-1/2 ">
                        <img className="w-full sm:w-full object-cover overflow-hidden  p-6 text-white" src="https://dev4.flatja.com/templates/default/customized_template/icons/register/step4.png" />
                    </div>
                    <div className="w-full sm:w-1/2 text-center flex">
                        <div className="">
                            <h2 className="py-6 h-auto bg-yellow-600 p-4 text-white text-lg font-bold">step 4</h2>
                        </div>
                        <div className="flex-1 px-4 flex flex-col items-start">
                            <h2 className="step-title">Make reservation</h2>
                            <p className="text-lg py-4">Find your favorite teacher and learning content,Make your trial reservation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

    </>
    )
}

export default Student;

