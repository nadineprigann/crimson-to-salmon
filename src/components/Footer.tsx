import * as React from 'react';
import styled from '@emotion/styled';
import { TextColor, MainRed, FooterParagraph, Heading, AirBlue, SunBlue, LegendLabelColor } from 'src/materials/materials';

export const FooterRoot = styled('div')`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 15vh 0 20vh 0;
`

export const Sources = styled('div')`
    width: 50%;
    margin: 5rem 0 0 0;
`

export const FooterHeading = styled('h1')`
    font-size: 2rem;
    font-weight: 700;
    line-height: 130%;
    color: ${TextColor};
    margin: 5vh 0 2vh 0;
`

export const FooterSubheading = styled('h2')`
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    color: ${TextColor};
    margin: 5vh 0 2vh 0;
`

export const FooterLink = styled('a')`
        color: ${TextColor};
        text-decoration: none;

    &:hover,
    &:visited {
        text-decoration: underline;
        transition: all 0.2s ease-in-out;
    }
`

export const SourceItem = styled('div')`
    margin: 0em 0 0.5em 0;
    font-size: 1rem;
    line-height: 1rem;
`

export class Conclusion extends React.Component {
    render() {
        return(
        
            <FooterRoot>
                <FooterHeading>Methodology</FooterHeading>
                <FooterParagraph>
                    This project was created by <FooterLink href="http://nadineprigann.de/">me</FooterLink> during the last month of my internship at <FooterLink href="https://www.interactivethings.com/">Interactive Things</FooterLink>, a Zurich based design studio for digital products and data visualization. 
                </FooterParagraph>
                <FooterParagraph>
                    For the global overview, the data was extracted from <FooterLink href="https://whoairquality.shinyapps.io/AmbientAirQualityDatabase/">Ambient Air Quality Database Application</FooterLink> by the <FooterLink href="https://www.who.int/">WHO</FooterLink>. Detailed information about Switzerland and Zurich use a <FooterLink href="https://data.stadt-zuerich.ch/dataset/luftqualitaet-historisierte-messungen">monthly air quality assessment</FooterLink> by the <FooterLink href="https://www.stadt-zuerich.ch/gud/de/index/umwelt_energie.html">City of Zurich, Departement Health and Environment</FooterLink>. This data is provided by <FooterLink href="https://www.stadt-zuerich.ch/portal/de/index/ogd.html">Open Data Zurich</FooterLink>.

                    warum Werte von 2016? auch staten?
                </FooterParagraph>
                <FooterParagraph>
                    Personally, the topic of environment protection, climate change, and sustainability are topics which I not only have a great personal concern about but are also important key questions of today's society. 
                </FooterParagraph>

                <FooterHeading>Conception and realization</FooterHeading>                
                <FooterParagraph>
                    This project was realized by<br />
                    <FooterLink href="http://nadineprigann.de/">Nadine Prigann</FooterLink><br />
                    with many thanks to<br />
                    <br /> 
                    Luc Guillemot<br />
                    Jan Wächter<br />
                    Gerhard Bliedung<br />
                    and the whole team at<br />
                    <FooterLink href="https://www.interactivethings.com/">Interactive Things</FooterLink>
                </FooterParagraph>

                <Sources>
                <FooterHeading>Sources</FooterHeading>
                <FooterSubheading>Air pollution</FooterSubheading>                
                    <SourceItem>
                    <FooterLink href="https://www.who.int/">World Health Oraganiztion</FooterLink>,{' '}
                        <FooterLink href="https://www.who.int/air-pollution/news-and-events/how-air-pollution-is-destroying-our-health">«How air pollution is destroying our health»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>
                    <SourceItem>
                        <FooterLink href="https://www.stadt-zuerich.ch/gud/de/index.html">City of Zurich, Departement Health and Environment</FooterLink>,{' '}
                        <FooterLink href="https://www.stadt-zuerich.ch/gud/de/index/umwelt_energie/luftqualitaet.html">«Air Quality»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem> 
                    <SourceItem>
                        <FooterLink href="https://www.bafu.admin.ch/bafu/de/home.html">Bundesamt für Umwelt BAFU</FooterLink>,{' '}
                        <FooterLink href="https://www.bafu.admin.ch/bafu/de/home/themen/luft.html">«Thema Luft»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>
                    <SourceItem>  
                    <FooterLink href="https://www.bafu.admin.ch/bafu/de/home.html">Bundesamt für Umwelt BAFU</FooterLink>,{' '}
                        <FooterLink href="https://www.bafu.admin.ch/bafu/de/home/themen/luft/dossiers/wintersmog-dicke-luft/farbenfroh-ins-neue-jahr--feuerwerke-und-luftbelastung.html">«Farbenfroh ins neue Jahr: Feuerwerke und Luftbelastung»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem> 

                    <FooterSubheading>Scattering</FooterSubheading>                
                    <SourceItem>
                        <FooterLink href="https://www.noaa.gov/">National Oceanic and Atmospheric Administration</FooterLink>,{' '}
                        <FooterLink href="https://www.spc.noaa.gov/publications/corfidi/sunset/">«The Colors of Sunset and Twilight»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>
                    <SourceItem>
                        <FooterLink href="https://www.scientificamerican.com/">Scientific American</FooterLink>,{' '}
                        <FooterLink href="https://www.scientificamerican.com/article/fact-or-fiction-smog-creates-beautiful-sunsets/">«Fact or Fiction?: Smog Creates Beautiful Sunsets»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>


                    <FooterSubheading>Further articles</FooterSubheading>
                    <SourceItem>
                        <FooterLink href="https://www.nzz.ch/">Neue Zürcher Zeitung</FooterLink>,{' '}
                        <FooterLink href="https://www.nzz.ch/meinung/aufruf-fuer-mehr-klimaschutz-ld.1436311">«Die Schweiz tut noch nicht genug für den Klimaschutz»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>
                    <SourceItem>
                    <FooterLink href="https://www.nzz.ch/">Neue Zürcher Zeitung</FooterLink>,{' '}
                        <FooterLink href="https://www.nzz.ch/wissenschaft/klimawandel-die-wichtigsten-fakten-im-ueberblick-ld.1420749">«Temperaturanstieg, Treibhauseffekt und die Rolle der Schweiz: Das sind die wichtigsten Fakten zum Klimawandel»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>
                    <SourceItem>
                    <FooterLink href="https://www.washingtonpost.com/">The Washington Post</FooterLink>,{' '}
                        <FooterLink href="https://www.washingtonpost.com/weather/2018/11/20/smoke-california-wildfires-is-pooling-over-dc-enhancing-our-sunsets/?noredirect=on&utm_term=.28b1754f8647">«Smoke from California wildfires is pooling over D.C. and intensifying sunsets»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>  
                    <SourceItem>  
                    <FooterLink href="http://macarenaruiztagle.com/">Macarena Ruiz-Tagle</FooterLink>,{' '}
                        <FooterLink href="http://macarenaruiztagle.com/index.php?/atmospheric-pollution-series/">«Atmospheric Pollution Series»</FooterLink>. Retrieved December 18, 2018.
                    </SourceItem>           
                </Sources>
            </FooterRoot>
        );
    }
}   