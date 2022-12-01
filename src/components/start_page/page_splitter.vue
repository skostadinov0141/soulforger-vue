<template>

    <div class="page-splitter">
        <div class="splitter-line">

        </div>
        <h2>
            <slot></slot>
        </h2>
        <div class="splitter-line">

        </div>
    </div>

</template>

<style scoped>

    .page-splitter{
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .splitter-line{
        flex: 1;
        height: 1px;
        background-color: rgb(147, 182, 220, 0.10);
    }

    h2{
        padding-left: 10px;
        padding-right: 10px;
        font-family: Roboto;
        font-size: 32px;
        font-weight: 800;
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        color: #CACECA;
    }

</style>