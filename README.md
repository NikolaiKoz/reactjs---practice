para iniciar un proyecto con vite

### 'npm create vite@latest'

para instalar eslint

### 'npm i -D eslit'

para configurar eslint

### 'npx eslint --init'

agregar el eslint ignore, e ignorar la carpeta dist

Para instalar prettier

### 'npm i -D prettier'

Para que eslint y prettier no se peleen intalo lo siguiente

### 'npm i -D eslint-config-prettier'

Creo los dos escripts

		"format": "prettier --write ."
		"lint": "eslint --fix . --ext .js,.jsx"


