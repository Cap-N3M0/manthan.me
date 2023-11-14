const downloadCV = () => {
    
    //using Java Script method to get PDF file
    fetch("Manthan_Srivastava_CV.pdf").then((response) => {
            response.blob().then((blob) => {
            
                    // Creating new object of PDF file
                    const fileURL =
                        window.URL.createObjectURL(blob);
            
                    // Setting various property values
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = "Manthan_Srivastava_CV.pdf";
                    alink.click();
                });
            });
            console.log('Download Complete');
};


export default downloadCV;