const generateCSS = () => {
    return `* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    header {
        background-color: #800000;
        color: white;
        text-align: center;
        padding: 3vw;
    }
    
    .row {
        margin-top: 2vw;
        margin-left: 25%;
        margin-right: 25%;
    }
    
    .col-4 {
        margin-top: 2vw;
    }
    
    #bigCard {
        border-radius: 5px;
        width: 18rem;
        box-shadow: 5px 5px 5px #868686;
    }
    
    #smallCard {
        width: 15rem;
    }
    
    .card-header {
        background-color: #68BBE3;
        color: white;
    }
    
    .card-body {
        background-color: #F6F7F9;
        border-left: 1px solid #EDEDED;
    }`
}

module.exports = generateCSS;