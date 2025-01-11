import React from 'react';

const FAQ = () => {
    return (
        
        <div>
            <div className=" bg-[#D9EEF3]">
                <h1 className='pt-16 text-4xl font-bold text-center '>FAQ Taptaptyping?</h1>
                <div className="flex-col py-10 lg:pl-40 hero-content lg:flex-row">
                    <div>
                    <div className="collapse collapse-arrow bg-[#ECF7F9]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="text-xl font-medium collapse-title">What is a typing test?</div>
                    <div className="collapse-content">
                    <p>A typing test measures your typing speed and accuracy. It evaluates how many words you can type per minute (WPM) while maintaining a minimal number of errors.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#ECF7F9]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="text-xl font-medium collapse-title">How is typing speed calculated?</div>
                    <div className="collapse-content">
                    <p>Typing speed is calculated in words per minute (WPM). One "word" is typically defined as five characters, including spaces and punctuation. Speed is derived by dividing the total number of characters typed by five and then dividing that by the time taken (in minutes).</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#ECF7F9]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="text-xl font-medium collapse-title">What is a good typing speed?</div>
                    <div className="collapse-content">
                    <p>A good typing speed varies depending on the purpose:
                    </p>
                    <li>For general work: 40–50 WPM is considered average.</li>
                    <li>For professional typists: 70–80+ WPM is ideal.</li>
                        
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#ECF7F9]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="text-xl font-medium collapse-title">How can I improve my typing speed and accuracy?</div>
                    <div className="collapse-content">
                    <p>You can improve your typing skills by:</p>

                        <li>Practicing regularly using typing software or online platforms.</li>
                        <li>Learning proper finger placement and touch typing techniques.</li>
                        <li>Maintaining focus on accuracy over speed initially.</li> 
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#ECF7F9]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="text-xl font-medium collapse-title">What is a good typing speed?</div>
                    <div className="collapse-content">
                    <p>A good typing speed varies depending on the purpose:

                        For general work: 40–50 WPM is considered average.
                        For professional typists: 70–80+ WPM is ideal.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;