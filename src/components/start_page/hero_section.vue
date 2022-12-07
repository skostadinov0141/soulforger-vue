

<template>
<div class="hero-alignment-container">
    <h1>
        Die Zukunft von Shadowrun beginnt mit <em>Soulforger</em>.
    </h1>
    <div style="height: 16px;"></div>
    <p>
        Jede Geschichte beginnt mit einem Helden... diese Geschichte beginnt mit Soulforger. Soulforger ist eine Open-Source-Plattform, die derzeit von einem einzigen Entwickler und einem einzigen Designer betrieben wird. Alles, was wir erschaffen, ist aus Liebe zu Shadowrun und den Geschichten, die man damit erzählen kann, entstanden. Das Ziel ist es, es jedem zu ermöglichen, diese Geschichten zu erzählen, indem wir uns um den schwierigen Teil kümmern, der die Charaktererstellung, das Kampagnenmanagement und das ständige Suchen in Büchern beinhaltet.
    </p>
</div>
</template>



<style scoped>

    .hero-alignment-container{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        width: 550px;
        margin-left: auto;
    }

    h1{
        font-size: 40px;
        color: #CACECA;
        font-weight: 700;
    }

    em{
        font-size: 40px;
        color: #8D54A0;
        font-weight: 800;
        font-style: normal;
    }

    p{
        font-size: 16px;
        color: #CACECA;
        font-weight: 400;
    }

    @media only screen and (max-width: 1024px){
        .hero-alignment-container{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            padding: 10px;
            border-radius: 5px;
            -webkit-backdrop-filter: blur(40px);
                    backdrop-filter: blur(40px);
            border: solid 1px rgba(147, 182, 220, 0.10);
            -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
                    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        }

        h1{
            font-size: 32px;
            color: #CACECA;
            font-weight: 700;
        }

        em{
            font-size: 32px;
            color: #8D54A0;
            font-weight: 800;
            font-style: normal;
        }

        p{
            font-size: 16px;
            color: #CACECA;
            font-weight: 400;
        }

    }

</style>