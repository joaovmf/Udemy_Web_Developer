CHAIN OF RESPONSIBILITY ou PADRÃO MIDDLEWARE

Imagine que você tem uma função que executa três passos. Essa função será pouco reutilizada. 

Imagine agora que você tem três funções que executam cada uma um passo. Cada função (passo) pode ser reutilizado. 
Logo, você não tem acoplamento de um passo para outro. Você pode utilizar os passos de maneira individual, como
você também pode chamar umas as outras para execução de um maior passo. Isso é o chain of responsibility ou padrão middleware.