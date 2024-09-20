<template>
    <section class="section">
        <div class="container">
            <div class="row justify-content-center"> 
                    <div class="form-container">
                        <h1>(Re)Bonjour :)</h1>
                        <p>Vous pouvez lire nos actualités du jour !</p>
                    </div>
            </div>
        </div>
    </section> 

</template>



<style scoped>
.section {
position: relative;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white; 
}

.section::before {
content: "";
background-image: url('../../../public/topacc.png') !important;
background-color: rgba(0, 0, 0, 0.5); 
background-size: cover;
background-position: center;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
filter: blur(3px); 
}

.section h1 {
font-size: 36px;
}
.section p {
font-size: 20px;
}
</style>
