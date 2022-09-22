import React from "react";
export type FaqCollapseProps = {
    question: string,
    answer: string
}

const FaqCollapse = ({question, answer}:FaqCollapseProps) => {
    return (
        <>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box focus:shadow-custom shadow-none transition ">
                <div className="collapse-title text-xl font-medium">
                    {question}
                </div>
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
        </>
    )
}

export default FaqCollapse