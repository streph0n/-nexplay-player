# Testar NexPlay Player no iPhone sem computador

1. No Safari, abra https://github.com/streph0n/-nexplay-player e toque em Code > Codespaces > Create codespace on main.
2. No terminal do Codespaces, execute `npm install`.
3. Execute `npx expo start --tunnel`. Se solicitado, confirme a instalação do pacote de túnel.
4. No iPhone, instale Expo Go (App Store), acesse a URL exp:// do terminal pelo iPhone ou leia o QR code exibido em outro aparelho. O Safari e Expo Go devem abrir o aplicativo se a versão do Expo Go suportar o SDK do projeto.
5. Teste somente links M3U e contas Xtream de fontes autorizadas.
6. Não coloque credenciais reais nos arquivos do GitHub nem em capturas de tela.

**Limitações:** Codespaces pode ter limites de uso; Expo Go não equivale a um aplicativo instalado de produção. Para um build iOS TestFlight é necessária uma conta Apple Developer ativa. A plataforma web pode falhar para playlists externas por causa de CORS, que não é necessariamente um defeito do player nativo.
