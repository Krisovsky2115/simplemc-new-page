import Nav from "./Nav";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
export default function PrivacyPolicy() {
    return(
        <div>
            <Nav/>
        <Container fullWidth>
        <Box sx={{ml: 2}}>
            <h1>Polityka prywatności</h1>
            <p>W tym dokumentie informujemy o tym, jakie informacje zbieramy, jak je ustawiamy i na co używamy.</p>
        </Box>

        <Box sx={{ml: 2}}>
        <Typography variant="body1" gutterBottom>
        1.Niniejsza Polityka Prywatności określa zasady przetwarzania i 
        ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem 
        przez nich usług sklepu internetowego XayMC  poprzez Serwis. <br/>
        2. Administratorem danych osobowych zawartych w serwisie jest
        Firma Dawid Krysman z siedzibą w Jastrzębiu-Zdroju, przy ulicy Wrocławskiej 7/23, NIP 633 224 95 89 REGON 526816237 <br />
        3. W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy wewnętrzne
        procedury i zalecenia, które mają zapobiec udostępnieniu danych osobom
        nieupoważnionym. Kontrolujemy ich wykonywanie i stale sprawdzamy ich zgodność z
        odpowiednimi aktami prawnymi - ustawą o ochronie danych osobowych, ustawą o
        świadczeniu usług drogą elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i
        aktach prawa wspólnotowego. <br/>
        4. Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz
        w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania
        danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy
        stronami umowy. <br/>
        5. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniach w
        następujący sposób: <br/>
        a) poprzez dobrowolnie wprowadzone w formularzach informacje <br/>
        b) poprzez gromadzenie plików “cookies” [patrz polityka plików “cookies”]. <br/>
        6. Serwis zbiera informacje dobrowolnie podane przez użytkownika. <br/>
        7. dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego
        formularza np. w celu dokonania procesu obsługi kontaktu informacyjnego <br/>
        8. Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani udostępnione
        osobom trzecim, zgodnie z przepisami Ustawy o ochronie danych osobowych. <br/>
        9. Do danych zawartych w formularzu przysługuje wgląd osobie fizycznej, która je tam
        umieściła. Osoba ta ma również praw do modyfikacji i zaprzestania przetwarzania swoich
        danych w dowolnym momencie. <br/>
        10. Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności serwisu, na które
        może wpłynąć rozwój technologii internetowej, ewentualne zmiany prawa w zakresie
        ochrony danych osobowych oraz rozwój naszego serwisu internetowego. O wszelkich
        zmianach będziemy informować w sposób widoczny i zrozumiały. <br/>
        11. W Serwisie mogą pojawiać się linki do innych stron internetowych. Takie strony
        internetowe działają niezależnie od Serwisu i nie są w żaden sposób nadzorowane przez
        serwis …………... Strony te mogą posiadać własne polityki dotyczące prywatności oraz
        regulaminy, z którymi zalecamy się zapoznać. <br/>
        W razie wątpliwości co któregokolwiek z zapisów niniejszej polityki prywatności jesteśmy do
        dyspozycji - nasze dane znaleźć można w zakładce - KONTAKT <br/>
        </Typography>
        </Box>
        </Container>
    </div>
    )
}