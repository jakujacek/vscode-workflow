import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardWrapper = styled.div`
  > * {
    margin-bottom: 20px;
  }
`;

function Vim() {
  return (
    <CardWrapper>
      <Card>
        <h1>Co to jest VIM</h1>
        <p>VIM to edytor, który powstał w 1991r. na bazie edytora VI.</p>
        <p>VIM oznacza VI Improved.</p>
      </Card>
      <Card>
        <h1>Tryby (modes).</h1>
        <p>VIM opera się na tym, że posiada różne tryby.</p>
        <p>
          Najbardziej podstawowe tryby to: NORMAL, INSERT, VISUAL i COMMAND.
        </p>
        <p>
          Najczęściej będziemy funkcjonować w trybie NORMAL, czyli w trybie
          edycji i nawigowania.
        </p>
        <div className="box">NORMAL</div>
        <div className="box">INSERT</div>
        <div className="box">VISUAL</div>
        <div className="box">COMMAND LINE</div>
      </Card>
      <Card>
        <h1>Podstawy poruszania się w VIM</h1>
        <p>
          W VIM możemy poruszać się na wiele sposobów najbardziej podstawowy
          sposób poruszania się to poruszanie się tak jak strzałkami.
        </p>
        <p>
          W VIM odbywa się to za pomocą przycisków:
          <ul>
            <li className="command">h (lewo)</li>
            <li className="command">j (dół)</li>
            <li className="command">k (góra)</li>
            <li className="command">l (prawo)</li>
          </ul>
        </p>
        <p>
          Wejście w tryb pisania możliwe jest na kilka sposobów, ale najbardzie
          podstawowy to kliknięcie przycisk: <span className="command">i</span>.
          Żeby wyjść z trybu pisania klikamy:
          <span className="command"> ESC</span>.
        </p>
      </Card>
      <Card>
        <h1>Poruszanie horyzontalne</h1>
        <p>
          W VIM możemy poruszać się horyzontalnie czyli tylko w jednej linii na
          wiele różnych sposobów:
        </p>
        <ul>
          <li className="command">w (na początek słowa).</li>
          <li className="command">e (na koniec słowa)</li>
          <li className="command">b (na początek słowa do tył)</li>
          <li className="command">f (wyszukaj literę w linii)</li>
          <li className="command">
            t (wyszukaj literę w linii i zatrzymaj się przed nią)
          </li>
          <li className="command">0 (idź na początek linii)</li>
          <li className="command">$ (idź na koniec linii)</li>
          <li className="command">^ (idź na pierwszy znak w linii)</li>
        </ul>
        <p>
          Wyszukiwanie za pomocą <span className="command">t </span>i
          <span className="command"> f</span> można powtarzać poprzez użycie:
          <ul>
            <li className="command">; (powtórz wyszukiwanie do przodu)</li>
            <li className="command">, (powtórz wyszukiwanie do tył)</li>
          </ul>
        </p>
      </Card>
      <Card>
        <h1>Poruszanie wertykalne</h1>
        <ul>
          <li className="command">gg (na początek pliku).</li>
          <li className="command">G (na koniec pliku)</li>
          <li className="command">M (na środek widoku)</li>
          <li className="command">/text (wyszukiwanie)</li>
          <li className="command">
            s (vim sneak wyszukiwanie po dwóch literach)
          </li>
          <li className="command">
            &#123; (poruszanie w górę pomiędzy sekcjami)
          </li>
          <li className="command">
            &#125; (poruszanie w dół pomiędzy sekcjami)
          </li>
          <li className="command">
            liczba + j || liczba + k (poruszanie w dół lub w górę o określoną
            ilość)
          </li>
        </ul>
      </Card>
      <Card>
        <h1>Edycja w trybie normalnym</h1>
        <p>
          Vim pozwala na bardzo dokładne i szybkie edytowanie, jest to jedna z
          największych zalet Vima
        </p>
        <p>
          Podstawowe komendy do edycji można łączyć z innymi comendami co w
          efekcje daje duży zakres możliwości
        </p>
        <h3>Podstawowe komendy do edycji:</h3>
        <ul>
          <li className="command">dd (usunięcie linii)</li>
          <li className="command">cc (usunięcie linii i wejście w tryb pisania)</li>
          <li className="command">yy (skopiowanie linii)</li>
          <li className="command">D (usunięcie od kursora do końca linii)</li>
          <li className="command">C (usuniecię od kursora do końca linii i wejście w tryb pisania)</li>
          <li className="command">dw (usunięcie od kursora do końca słowa)</li>
          <li className="command">diw (usunięcie całego słowa)</li>
          <li className="command">yiw (skopiowanie słowa)</li>
          <li className="command">yi( (skopiowanie wszystkiego wewnątrz ogrągłych nawiasów)</li>
          <li className="command">yip (skopiowanie sekcji)</li>
          <li className="command">dip (usunięcie sekcji)</li>
          <li className="command">cip (usunięcie sekcji i wejście w tryb pisania)</li>
          <li className="command">cap (usunięcie sekcji wraz ze spacją na zewnątrz wejście w tryb pisania)</li>
          <li className="command">ci' (usniecie tekstu wewnątrz cudzyłowiu i wejście w tryb pisania)</li>
          <li className="command">p (wklej za kursorem)</li>
          <li className="command">P (wklej przed kursorem)</li>
        </ul>
      </Card>
    </CardWrapper>
  );
}

export default Vim;
