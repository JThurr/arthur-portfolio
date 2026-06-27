"use client";

// VLibras — widget oficial do Governo Federal (gov.br) que traduz o conteúdo
// do site para Libras (Língua Brasileira de Sinais), com um avatar 3D.
// Atende usuários surdos. Carrega o script de forma assíncrona após a montagem.

import Script from "next/script";
import {useEffect} from "react";

// Tipagem mínima do objeto global injetado pelo script do VLibras.
declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

export default function VLibras() {
  // Inicializa o widget assim que o script estiver disponível.
  function initWidget() {
    if (typeof window !== "undefined" && window.VLibras) {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    }
  }

  // Garante a inicialização caso o script já tenha carregado antes da montagem.
  useEffect(() => {
    initWidget();
  }, []);

  return (
    <>
      {/* Estrutura exigida pelo VLibras para renderizar o avatar e o botão.
          Os atributos custom (vw, vw-access-button...) vão via spread para
          não conflitar com a checagem de tipos do JSX. */}
      <div {...{vw: "true"}} className="enabled">
        <div {...{"vw-access-button": "true"}} className="active" />
        <div {...{"vw-plugin-wrapper": "true"}}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>

      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initWidget}
      />
    </>
  );
}
