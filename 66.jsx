$._ext_reset={
run : function() {

if($.os.match(/windows/i) == null) {alert('Esta versão do SuperAlbum foi criada para Windows, instale a versão correta para seu computador.','Compatibilidade'); return; };

var caixa = new Window('dialog','Reset');

var linha01 = caixa.add('group');
linha01.alignment = 'left';
var check01 = linha01.add('checkbox');
var texto01 = linha01.add('staticText');
texto01.text = 'Apagar histórico de imagens inseridas.';
texto01.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
texto01.graphics.foregroundColor = texto01.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
check01.value = false;
texto01.enabled = false;
check01.onClick = function() { texto01.enabled = this.value; };

var linha02 = caixa.add('group');
linha02.alignment = 'left';
var check02 = linha02.add('checkbox');
var texto02 = linha02.add('staticText');
texto02.text = 'Reiniciar as opções de Janela.';
texto02.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
texto02.graphics.foregroundColor = texto02.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
check02.value = false;
texto02.enabled = false;
check02.onClick = function() { texto02.enabled = this.value; };

var linha03 = caixa.add('group');
linha03.alignment = 'left';
var check03 = linha03.add('checkbox');
var texto03 = linha03.add('staticText');
texto03.text = 'Apagar todos os Presets de Usuário.';
texto03.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
texto03.graphics.foregroundColor = texto03.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
check03.value = false;
texto03.enabled = false;
check03.onClick = function() { texto03.enabled = this.value; };

var linha04 = caixa.add('group');
linha04.alignment = 'left';
var check04 = linha04.add('checkbox');
var texto04 = linha04.add('staticText');
texto04.text = 'Reiniciar as opções de Novo Documento.';
texto04.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
texto04.graphics.foregroundColor = texto04.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
check04.value = false;
texto04.enabled = false;
check04.onClick = function() { texto04.enabled = this.value; };

var linha05 = caixa.add('group');
linha05.alignment = 'left';
var check05 = linha05.add('checkbox');
var texto05 = linha05.add('staticText');
texto05.text = 'Reiniciar as opções de Configuração.';
texto05.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
texto05.graphics.foregroundColor = texto05.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
check05.value = false;
texto05.enabled = false;
check05.onClick = function() { texto05.enabled = this.value; };

var linha06 = caixa.add('group');
linha06.alignment = 'left';
var check06 = linha06.add('checkbox');
var texto06 = linha06.add('staticText');
texto06.text = 'Reiniciar as opções do Templates Ps.';
texto06.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
texto06.graphics.foregroundColor = texto06.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
check06.value = false;
texto06.enabled = false;
check06.onClick = function() { texto06.enabled = this.value; };

var botoes = caixa.add('group');
var aplicar = botoes.add('button',undefined,'Aplicar');
var cancelar = botoes.add('button',undefined,'Cancelar');

aplicar.onClick = function() {
caixa.close();
caixa = null;
delete caixa;
$.gc ();

if(check01.value == true) {;
var logInserirImagem =  Folder(app.preferencesFolder+"/logInserirImagem");
var getLogsImagens = logInserirImagem.getFiles();
var arquivo = new File();
if(getLogsImagens.length == 0) logInserirImagem.remove();
for (var i = 0; i < getLogsImagens.length; i++){
arquivo = getLogsImagens[i];
arquivo.remove();
logInserirImagem.remove();
}
}

var janelasDinamicas =  File(app.preferencesFolder+"/janelasDinamicas.xml");
var Medidas =  File(app.preferencesFolder+"/Medidas.xml");
var medidasDinamicas =  File(app.preferencesFolder+"/medidasDinamicas.xml");
var superAlbumCFG =  File(app.preferencesFolder+"/superAlbumCFG.xml");
var templateCCdinamico =  File(app.preferencesFolder+"/templateCCdinamico.xml");

if(check02.value == true) janelasDinamicas.remove();
if(check03.value == true) Medidas.remove();
if(check04.value == true) medidasDinamicas.remove();
if(check05.value == true) superAlbumCFG.remove();
if(check06.value == true) templateCCdinamico.remove();

alert('Processo efetuado com sucesso.\nPor Favor, reinicie a extensão.','Reiniciar Configurações');

};

cancelar.onClick = function() {
caixa.close();
caixa = null;
delete caixa;
$.gc ();
};

caixa.show();

},
};