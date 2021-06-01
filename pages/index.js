import Head from "next/head";
import Image from "next/image";

import styles from "../styles/main.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projekt Zobák</title>
        <link rel="icon" href="/uk.png" />
      </Head>

      <main className={styles.main}>
        <table className={styles.tabl}>
          <tr>
            <td className={styles.name}>
              <a href="https://github.com/thomaskiml" className={styles.name}>
                Thomas Alexander Kiml
              </a>
            </td>
          </tr>
        </table>
        <table className={styles.tabl}>
          <tr>
            <td>
              <div className={styles.h01}>
                {" "}
                <h1 className={styles.title}>
                  Ptačí <br></br>zobák
                </h1>
              </div>
            </td>

            <td className={styles.lowe}>6/1/2021</td>
          </tr>
        </table>

        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
        <div className={styles.line4}></div>
        <div className={styles.line5}></div>

        <table className={styles.tabl}>
          <tr>
            <td>
              <img src="tltt.png" className={styles.ten}></img>
            </td>
            <td className={styles.fif}>
              <div className={styles.tito}>1. Úvod</div>

              <div className={styles.desco}>
                <hr className={styles.hr}></hr>
                Pokud bychom porovnali všech 10 000 druhů ptáku, tak bychom
                nenašli dva, kteří by měli morfologicky stejné zobáky. Za toto
                vděčíme rozdílným abiotickým faktorům v okolí jejich výskytu,
                které ovlivňují jejich potencionální potravu a způsoby, jak ji
                ulovit.
                <div className={styles.popop}>
                  Rozmanitost všech ptačích druhů nelze popsat v jedné práci, z
                  tohoto důvodu se zaměřím na obecný vývoj a na pár ojedinělých
                  případů s ukázkou jejich adaptace na jejich prostředí.
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.fif}>
              <div className={styles.liko}>
                <div className={styles.tito}>2. Hlavní část</div>

                <div className={styles.desco}>
                  <hr className={styles.hr}></hr>
                  Před tím než se podíváme na samotný vývoj ptačího zobáku je
                  potřeba pochopit. Z jakého důvodu se vyvinul? U koho se
                  vyvinul a jak vypadal? Je potřebné si uvědomit že každý krok v
                  evoluci je podmíněn nějakou překážkou, které je vyhlazena
                  prostředím. To znamená že na začátku se nenarodil jen jedinec
                  s zobákem, ale jen s malým výklenkem.<br></br>
                  <div className={styles.popop}>
                    Jeden z prvních druhů který toto využil byl edmontosaurus
                    (obr. vlevo). Jeho zobák využíval k lepší selekci potravy.
                    Na tomto obrázku nám může připomínat jeho zobák jakýsi
                    nehet, což je správný dojem. Jako všechny zobáky je tento
                    tvořen z keratinu, velice odolného a ohebného proteinu,
                    který také tvoří nehty, kraví rohy, ptačí pera a také vlasy.
                    V této první variaci zobáku byly stále v tlamě zuby.
                  </div>
                </div>
              </div>
            </td>
            <td>
              <img src="olafur.jpg" className={styles.ten}></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src="ptero.jpg" className={styles.ten}></img>
            </td>
            <td className={styles.fif}>
              <div>
                <div className={styles.desco}>
                  Postupem času se tyto typy zobáků začali rozšiřovat i do
                  jiných druhů. Dále se keratinová část tlamy zvětšovala až do
                  jisté míry nahradila tehdejší tlamu. Jedním z dinosaurů na
                  kterém je toto vidět je pterosaurus. Těmto mohutným tvorům,
                  jedním z největších letců co, kdy létali na světě, trvalo
                  kolem 150 milionů let se vyvinout do své vrcholné podoby. Ze
                  začátku se jim vytvořily jen blány mezi končetinami, časem ale
                  začali poletovat krátké vzdálenosti až nakonec mohli lovit při
                  letu. Lovili s využitím jejich zobáků. Letěli nízko hladiny,
                  když uviděli kořist potopili svůj zobák s hlavou pod vodu,
                  díky hydrodynamickému tvaru bylo tření minimální, poté doplul
                  ke kořisti a do ní zapíchl svůj zobák. Tento způsob lovu
                  používají některé druhy ptáků do dnešního dne.
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.fif}>
              <div className={styles.liko}>
                <div className={styles.desco}>
                  Dalším evolučním studiem pro ptáky bylo odlehčení. Jelikož se
                  ptáci vyvíjeli z dinosaurů tak měli těžké a husté kosti,
                  neměli peří a měli zuby v zobáku. To jim neumožňovalo let na
                  dlouhé vzdálenosti. Vývojem si tak ptáci vyvinuli peří a
                  zřídli jim kosti a zároveň se stali “dutými”. Pro tuto práci
                  je ale podstatnější ztráta zubů v dutině zobákové (část 2.1.).
                </div>
              </div>
            </td>
            <td>
              <img src="feth.jpg" className={styles.ten}></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src="lessb.jpg" className={styles.ten}></img>
            </td>
            <td className={styles.fif}>
              <div className={styles.tito}>2.1. Ztráta zubů u ptáků</div>

              <div className={styles.desco}>
                <hr className={styles.hr}></hr>
                První druhy ptáků měli v zobáku zuby. Bylo to užitečné mít zuby,
                ale je to jedna z věcí, která zpomalovala růst embrya ve
                vajíčku. Když je vajíčko v inkubační době je velmi zranitelné, a
                tak logiky byla evoluční potřeba toto zkrátit. Průměrné
                inkubační doba u dinosaurů byla mezi 3 a 6 měsíci. Až 6 měsíců
                je dlouhé doba v porovnání s 10 dny až 3 týdny u novodobých
                ptáků. Delší doba vděčí mimo jiné pomalé formaci zubů. Růst zubů
                si můžeme představit jako strom a jeho letokruhy. První naroste
                malá větvička a za nějakou dobu je z ní strom s průměrem 20 cm.
                Tento proces byl tak zdlouhaví natolik že dinosauři zahrabávali
                svá vejce.
              </div>
            </td>
          </tr>

          <tr>
            <td className={styles.fif}>
              <div className={styles.liko}>
                <div className={styles.tito}>2.2. Adaptace na prostředí</div>

                <div className={styles.desco}>
                  <hr className={styles.hr}></hr>
                  Ptačí zobáky se adaptovali od samého začátku své existence, a
                  tak je zřejmé, že díky dlouhé době, které na této planetě jsou
                  existuje mnoho různých zobáků. Všichni ptáci mají jen jeden
                  zobák, proto je důležité, aby fungoval co nejlépe. Každý
                  živočich se nějakým způsobem přizpůsobil na své prostředí.
                  Jedním z problémů, na které někteří ptáci narazili je žití v
                  tropech je teplo, velké teplo. Ptáci se tak museli nějak
                  vyvinout, aby se nepřehřívali v těchto teplotách. Jedním z
                  unikátních případů, kde adaptaci na teplé podnebí vidět je
                  tukan.
                </div>
              </div>
            </td>
            <td>
              <img src="tuca.webp" className={styles.ten}></img>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.liko}>
                <div className={styles.desco}>
                  Ptačí zobáky se adaptovali od samého začátku své existence, a
                  tak je zřejmé, že díky dlouhé době, které na této planetě jsou
                  existuje mnoho různých zobáků. Všichni ptáci mají jen jeden
                  zobák, proto je důležité, aby fungoval co nejlépe. Každý
                  živočich se nějakým způsobem přizpůsobil na své prostředí.
                  Jedním z problémů, na které někteří ptáci narazili je žití v
                  tropech je teplo, velké teplo. Ptáci se tak museli nějak
                  vyvinout, aby se nepřehřívali v těchto teplotách. Jedním z
                  unikátních případů, kde adaptaci na teplé podnebí vidět je
                  tukan.
                </div>
              </div>
            </td>
            <td>
              <div className={styles.liko}>
                <div className={styles.desco}>
                  Předci tukana nám nejsou přesně známi, vědci však připisují
                  jejich předky za nějaké menší šplhavce. Když vědci analyzovali
                  tukaní DNA zjistili, že se velmi podobá ptákům z čeledě
                  dlátovitých. Z toho bychom mohli odsoudit, že předci tukana
                  nebyli až tak mohutní a neměli nám symbolický zobák. Když se
                  tedy podíváme, co se muselo vyvinout, tak je toho hodně.
                </div>
              </div>
            </td>
          </tr>
        </table>
        <img src="/hedo.jpg" className={styles.apdo}></img>
        <table className={styles.tabl}>
          <tr>
            <td className={styles.fif}>
              <div className={styles.liko}>
                <div className={styles.desco}>
                  Žití v tropech přináší mnoho překážek. Ptáci jsou teplokrevní
                  živočichové, nesmí se tedy přehřívat ani podchladit (to druhé
                  asi v tropech nehrozí). Jelikož potřebují peří tak museli
                  vyvinou nějakou metodu na radiaci teploty pryč z těla. K tomu
                  využily svého zobáku. Zobák se narozdíl od jeho předků
                  prodloužil, s jeho tělem. To proto aby mohl dosáhnou na hůře
                  dosažitelnou potravu na větvích, které jeho hmotnost již
                  neunesou, ale hlavně slouží jako regulační těleso. V jeho
                  zobáku proudí velké množství krve, která jej ohřívá (obr.
                  vpravo). Krev proudí jeho zobákem a tím se i ochlazuje a
                  nepřehřívá se. Vědci našli přímou korelaci mezi velikostí
                  zobáku a úmrtností z přehřátí u tukanů. Velikost zobáku také
                  hraje v roli jejich páření samička si totiž vybírá samce podle
                  peří a zobáku, aby si mohla vybrat co nejlepší genofond pro
                  svoje potomky.
                </div>
              </div>
            </td>
            <td>
              <img src="rhino.jpg" className={styles.ten}></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src="papa.jpg" className={styles.ten}></img>
            </td>
            <td className={styles.fif}>
              <div className={styles.liko}>
                <div className={styles.desco}>
                  Tvar ptačího zobák je podmíněn mnoha faktory, a tak je nelze
                  všechny shrnout do jedné práce. Co víme jistě je že každý
                  vroubek nebo kanálek v zobáku má svůj účel a není jim jen
                  spotřeba potravy.<br></br>
                  <div className={styles.apdo}>
                    To je lze vidět u dýchacích otvorů nebo u zobáku pěvců.
                    Dýchací otvory se přesunuli z přední části do zadní. Toho
                    využívají někteří ptáci, aby mohli lépe dýchat při letu,
                    nebo někteří je zakrývají peřím, aby mohli filtrovat pevné
                    částice ze vzduchu v oblastech, kde je prašno. Pěvci zas
                    mají zobák, který nezkresluje melodie, které vydávají. Mohou
                    se tak mezi sebou dorozumívat. Tím stanovují svá teritoria a
                    shánějí si samičku na páření. Toto všechno jsou adaptace
                    zobáku, které se sami existenčními podmínkami pro jisté
                    druhy.
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.fif}>
              <div className={styles.liko}>
                <div className={styles.tito}>3. Závěr</div>

                <div className={styles.desco}>
                  <hr className={styles.hr}></hr>
                  <div className={styles.apd}>
                    Evoluce jako celek je výsledkem složek přirozeného a
                    sexuálního výběru. Přizpůsobení je klíčovou částí evoluce.
                    Sám Albert Einstein řekl:
                  </div>
                  <div className={styles.cursive}>
                    “Mírou inteligence je schopnost měnit se.”
                  </div>
                  <div className={styles.lololo}>- Albert Einstein </div>
                  <div className={styles.apd}>
                    Ptačí zobák vzešel z potřeby k motorické manipulaci předmětů
                    bez pomoci rukou (proto mi nikdy nebudeme mít zobák).
                    Přenesení této motoriky z končetin do zobáku umožnilo další
                    vývoj jiných orgánů. Toto z něj dělá velice všestranný a
                    adaptabilní orgán.
                  </div>
                  Zobák se vyvíjel se po miliony let časem se jen zdokonaloval.
                  Stal multifunkčním prostředkem, díky kterému mohou ptáci
                  lovit, sbírat semena, trhat maso, jíst ovoce, stavět hnízda,
                  regulovat svou teplotu nebo sát nektar květů. Jeho tvar je
                  podmíněn mnoha faktory, a tak je nelze všechny shrnout do
                  jedné práce. Co víme jistě je že každý vroubek nebo kanálek v
                  zobáku má svůj účel a není jim jen spotřeba potravy. Jeho
                  schopnost přizpůsobit se na různé abiotické faktory z něj
                  udělala nezbytnost.
                </div>
              </div>
            </td>
            <td>
              <img src="tuca.webp" className={styles.ten}></img>
            </td>
          </tr>
        </table>
        <footer>
        
           <div className={styles.lio}>created by - <a href="https://github.com/thomaskiml">@thomaskiml</a></div>
           </footer>
      </main>
    </div>
  );
}
