export const generateCssMarkdown = () => {
    return `
    :root{
        --primary: #FF5C58;
        --secondary: #1597E5;
        --primaryBg: rgb(233, 233, 233);
        --seccondaryBg: rgb(223, 223, 223);
    }
    *{
        padding: 0;
        margin: 0;
    }
    body{
        background-color: var(--primaryBg);
        padding: 0 2rem;
    }
    
    .header{
        display: flex;
        width: 100%;
        height: 5rem;
        font-size: 1.8rem;
        font-weight: 400;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: var(--primary);
        
    }
    
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-evenly;
        width: 100%;
    }
    
    .employee-card{
        display: flex;
        flex-direction: column;
        width: 22rem;
        margin: 1rem;
        box-shadow: 10px 5px 5px rgb(168, 168, 168);
        
    }
    
    .employee-card-header{
        padding: .5rem;
        height: 5rem;
        background-color: var(--secondary);
        color: rgb(236, 236, 236);
    }
    
    .employee-card-header h2{
        font-size: 2rem;
        font-weight: 500;
    }
    .employee-card-header h3{
        font-size: 1.5rem;
        font-weight: 400;
    }
    
    .employee-card-content{
        padding: 1.5rem 0;
        background-color: var(--seccondaryBg);
        width: 100%;
    }
    
    .employee-card-content-item{
        display: flex;
        margin: .5rem 1rem;
        padding: .5rem;
        font-size: 1.2rem;
        height: 2rem;
        align-items: center;
        background-color: rgb(238, 238, 238);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    }
    
    .employee-card-content-item a {
        margin-left: .5rem;
        font-size: 1.2rem;
        text-decoration: none;
        color: var(--secondary);
    }
    `;
}