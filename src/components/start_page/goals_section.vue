<script lang="ts">
import { defineComponent } from 'vue';
import PageSplitter from "./page_splitter.vue"


export default defineComponent({
    components:{
        PageSplitter
    }
})

</script>


<template>
<div class="goals-inner-container">
    <PageSplitter>
        Unsere Ziele
    </PageSplitter>
    <div class="goal-cards-container">
        <div class="goal-card">
            <h3>
                Kernfunktionalität
            </h3>
            <h4>
                Phase 1
            </h4>
            <div style="width : 16px; height : 8px;"/>
            <ul class="goal-list">
                <li>
                    Ein Wiki, das eine schnelle und effiziente Suche nach Informationen ermöglicht. Aufgrund der Art des Inhalts dieses Wikis müsste die öffentliche Freigabe mit Pegasus koordiniert werden. 
                </li>
                <li>
                    Ein Charakterersteller, mit dem die Spieler Charaktere erstellen und verwalten können. Da alles auf einer digitalen Plattform zentralisiert ist, brauchst du kein Papier mehr zu verschwenden!
                </li>
                <li>
                    Der nächste Schritt nach der Charaktererstellung wäre ein System, das es den Spielern erlaubt, alle ihre Würfe im Spiel auf Soulforger zu machen. Kein Warten mehr, bis jemand alle Einsen, Fünfen und Sechsen gezählt hat!
                </li>
            </ul>
        </div>
        <div style="width : 16px; height : 16px;"/>
        <div class="goal-card">
            <h3>
                Community Engine
            </h3>
            <h4>
                Phase 2
            </h4>
            <div style="width : 16px; height : 8px;"/>
            <ul class="goal-list">
                <li>
                    Hast du jemals kampagnenspezifische Ausrüstung oder NSC erstellt und sie später in einer Kampagne wiederverwendet? Stell dir nun vor, du hättest Zugang zu den Kreationen aller anderen Game Master. Dies ist das Ziel der Community-Engine. Ausrüstung, NSCs, Waffen, Fahrzeuge und vielleicht sogar komplette Kampagnen, die all das enthalten, werden auf Soulforger zur Verfügung gestellt und gemeinsam genutzt werden können. 
                </li>
            </ul>
        </div>
        <div style="width : 16px; height : 16px;"/>
        <div class="goal-card">
            <h3>
                In-Game-Engine
            </h3>
            <h4>
                Phase 3
            </h4>
            <div style="width : 16px; height : 8px;"/>
            <ul class="goal-list">
                <li>
                    Alle anderen Phasen konzentrieren sich hauptsächlich darauf, dir zu helfen, bevor du in die Sechste Welt eintauchst, aber das ist nicht genug. Wir wollen ja schließlich ein umfassendes System für Shadowrun erschaffen. In der letzten Phase (chronologisch und vom Schwierigkeitsgrad her) wollen wir zwei Systeme zu Soulforger hinzufügen, die es Spielern und Spielleitern ermöglichen, bestimmte Aufgaben zu automatisieren und den Einstieg in Shadowrun noch einfacher zu gestalten.
                </li>
                <li>
                    Das Kampagnen-Management-System wird es den Spielleitern ermöglichen, Szenen zu erstellen und mit den Spielern über ihre NSCs zu interagieren. 
                </li>
                <li>
                    Das Multiplayer-System wird es den Spielern ermöglichen, an Kampagnen teilzunehmen und alle ihre Werte und die ihrer Mitspieler in Echtzeit zu verfolgen.
                </li>
            </ul>
        </div>
    </div>
</div>
</template>


<style scoped>

    .goals-inner-container{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        min-height: 100%;
    }

    .goal-cards-container{
        flex: 1;
        display: flex;
        align-items: stretch;
        padding-top: 8px;
    }

    .goal-card{
        flex: 1;
        background-color: rgba(15, 30, 46, 1);
        border-radius: 5px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        border: solid 1px rgba(147, 182, 220, 0.10);
        padding: 16px;
    }

    .goal-list{
        list-style-position: outside;
        margin-left: 2em;
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: #B5BAB5;
    }

    h3{
        font-family: Roboto;
        font-weight: 500;
        font-size: 24px;
        color: #B5BAB5;
    }

    h4{
        font-family: Roboto;
        font-weight: 800;
        font-size: 16px;
        color: #A0A6A0;
    }

    @media only screen and (max-width: 1200px){
        .goal-cards-container{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            padding-top: 8px;
        }
    }

</style>