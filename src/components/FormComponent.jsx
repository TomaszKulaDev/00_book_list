import React from 'react';

const FormComponent = () => {
    const handleFormInput = (e) => {
        console.log(e.target.value)

    }
    const handleClickInput = () => {
        console.log('handle button click')
        alert("Yee its work")
    }
const handleFormSubmission = (e) =>{
        e.preventDefault()
        console.log('Form submission')
}

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input
                    type="text"
                    name="example"
                    onChange={handleFormInput}
                    style={{margin: "1rem 0"}}
                />
                <br/>
                <button type="button" onClick={handleClickInput}>Click me</button>
            </form>
        </section>
    );

}

export default FormComponent;
