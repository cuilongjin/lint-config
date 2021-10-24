# stylelint-config

## Install

```bash
$ npm install --save-dev @wqdy/stylelint-config
```

## Usage

add this to your .stylelintrc file:

```
{
  "extends": "@wqdy/stylelint-config"
}
```

## vscode 配置自动修复

在插件市场安装好 stylelint 插件后，在 settings.json 配置：

```json
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
}
```

## License

[MIT](/LICENSE).
