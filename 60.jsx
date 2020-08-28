$._ext_exportar={
run : function() {


if($.os.match(/windows/i) == null) {alert('Esta versão do SuperAlbum foi criada para Windows, instale a versão correta para seu computador.','Compatibilidade'); return; };

var jD = File(app.preferencesFolder + '/templateCCdinamico.xml');//ENCONTRA O ARQUIVO
jD.open('r');//ABRE O ARQUIVO EM FORMATO DE LEITURA
var xml = new XML( jD.read() );//LÊ O ARQUIVO EM FORMATO DE XML
jD.close();//FECHA O ARQUIVO

var caixa = new Window('dialog','Exportar Projeto');

var aviso = caixa.add('staticText');
aviso.text = 'A imagem será enviada para a pasta ProjetosExportados dentro da pasta de seu projeto.';
aviso.alignment = 'center';

var grupoExportarDaPasta = caixa.add('group');

var exportarDaPastaTexto = grupoExportarDaPasta.add('staticText');
exportarDaPastaTexto.text = 'Exportar arquivos da pasta:';
exportarDaPastaTexto.alignment = 'left';

var exportarDaPastaEdit = grupoExportarDaPasta.add('editText');
exportarDaPastaEdit.text = File.decode(xml.salvarTemplateEm);
exportarDaPastaEdit.alignment = 'left';
exportarDaPastaEdit.characters = 30;

var botaoPasta = grupoExportarDaPasta.add('button',undefined,'...');
botaoPasta.preferredSize = [20,20];

//MAC OS
//var semAcentos = caixa.add('staticText');
//semAcentos.alignment = 'center';
//semAcentos.text = 'Não utilize acento no nome da pasta.';
//semAcentos.graphics.font = ScriptUI.newFont ("Arial", "Italic", 12);
//semAcentos.graphics.foregroundColor = semAcentos.graphics.newPen (caixa.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);

botaoPasta.onClick = function (){
var abrirArquivo = Folder.selectDialog('Selecione a pasta');
if(abrirArquivo == null){ exportarDaPastaEdit.text = '~'; }else{ nomePasta = File.decode(abrirArquivo); exportarDaPastaEdit.text = nomePasta; }
}

var radioPainel = caixa.add('panel');
radioPainel.preferredSize = [500,0];
var altaResolucao = radioPainel.add('radioButton');
altaResolucao.text = 'EXPORTAR EM ALTA RESOLUÇÃO. Ideal para encadernadoras.';
altaResolucao.alignment = 'left';
altaResolucao.value = true;
var baixaResolucao = radioPainel.add('radioButton');
baixaResolucao.text = 'EXPORTAR EM BAIXA RESOLUÇÃO. Ideal para provas e Sistema Aprove.';
baixaResolucao.alignment = 'left';
var baixaResolucaoTexto = radioPainel.add('staticText');
baixaResolucaoTexto.text = 'Baixa Resolução: Imagem no tamanho de 1080 pixels, proporcional, com resolução em 72dpi.';
baixaResolucaoTexto.alignment = 'left';

var marcaDagua = caixa.add('checkBox');
marcaDagua.text = "Adicionar marca d'água às imagens."
marcaDagua.alignment = 'center';

var grupoEscolherMarcaDagua = caixa.add('group');

var EscolherMarcaDaguaTexto = grupoEscolherMarcaDagua.add('staticText');
EscolherMarcaDaguaTexto.text = "Escolher marca d'água";
EscolherMarcaDaguaTexto.alignment = 'left';

var EscolherMarcaDaguaEdit = grupoEscolherMarcaDagua.add('editText');
EscolherMarcaDaguaEdit.text = xml.marcaDagua;
EscolherMarcaDaguaEdit.alignment = 'left';
EscolherMarcaDaguaEdit.characters = 30;

var EscolherMarcaDaguaBotao = grupoEscolherMarcaDagua.add('button',undefined,'...');
EscolherMarcaDaguaBotao.preferredSize = [20,20];

EscolherMarcaDaguaBotao.onClick = function (){
var abrirArquivo02 = File.openDialog('Selecione uma imagem');
if(abrirArquivo02 == null){ EscolherMarcaDaguaEdit.text = "Selecione uma marca d'água"; }else{ EscolherMarcaDaguaEdit.text = File.decode(abrirArquivo02); }
}

var localMarca = caixa.add('staticText');
localMarca.text = "Local da marca d'água:";
localMarca.alignment = 'center';

var marcaDaguaPainel = caixa.add('panel');
marcaDaguaPainel.graphics.backgroundColor = marcaDaguaPainel.graphics.newBrush (marcaDaguaPainel.graphics.BrushType.SOLID_COLOR, [1, 1, 1]);
marcaDaguaPainel.preferredSize = [150,0];
var linha01 = marcaDaguaPainel.add('group');
linha01.spacing=50;
var a1 = linha01.add('radioButton');
var a2 = linha01.add('radioButton');
var a3 = linha01.add('radioButton');
var linha02 = marcaDaguaPainel.add('group');
linha02.spacing=50;
var a4 = linha02.add('radioButton');
var a5 = linha02.add('radioButton');
var a6 = linha02.add('radioButton');
a5.value = true;
var linha03 = marcaDaguaPainel.add('group');
linha03.spacing=50;
var a7 = linha03.add('radioButton');
var a8 = linha03.add('radioButton');
var a9 = linha03.add('radioButton');

a1.onClick = function(){ a2.value = false; a3.value = false; a4.value = false; a5.value = false; a6.value = false; a7.value = false; a8.value = false; a9.value = false; }
a2.onClick = function(){ a3.value = false; a4.value = false; a5.value = false; a6.value = false; a7.value = false; a8.value = false; a9.value = false; a1.value = false; }
a3.onClick = function(){ a4.value = false; a5.value = false; a6.value = false; a7.value = false; a8.value = false; a9.value = false; a1.value = false; a2.value = false; }
a4.onClick = function(){ a5.value = false; a6.value = false; a7.value = false; a8.value = false; a9.value = false; a1.value = false; a2.value = false; a3.value = false; }
a5.onClick = function(){ a6.value = false; a7.value = false; a8.value = false; a9.value = false; a1.value = false; a2.value = false; a3.value = false; a4.value = false; }
a6.onClick = function(){ a7.value = false; a8.value = false; a9.value = false; a1.value = false; a2.value = false; a3.value = false; a4.value = false; a5.value = false; }
a7.onClick = function(){ a8.value = false; a9.value = false; a1.value = false; a2.value = false; a3.value = false; a4.value = false; a5.value = false; a6.value = false; }
a8.onClick = function(){ a9.value = false; a1.value = false; a2.value = false; a3.value = false; a4.value = false; a5.value = false; a6.value = false; a7.value = false; }
a9.onClick = function(){ a1.value = false; a2.value = false; a3.value = false; a4.value = false; a5.value = false; a6.value = false; a7.value = false; a8.value = false; }

function exportarParaPasta(){

if(altaResolucao.value == true){
//alert('Os arquivos serão exportados para a pasta '+exportarDaPastaEdit.text+'/ProjetosExportados_ALTA');
var ProjetosExportados_ALTA = new Folder(exportarDaPastaEdit.text+'/ProjetosExportados_ALTA');
if(!ProjetosExportados_ALTA.exists) ProjetosExportados_ALTA.create();
}

if(baixaResolucao.value == true){
//alert('Os arquivos serão exportados para a pasta '+exportarDaPastaEdit.text+'/ProjetosExportados_BAIXA');
var ProjetosExportados_BAIXA = new Folder(exportarDaPastaEdit.text+'/ProjetosExportados_BAIXA');
if(!ProjetosExportados_BAIXA.exists) ProjetosExportados_BAIXA.create();
}

}

function exportarALTAresolucao(){

if(marcaDagua.value == true){
if(EscolherMarcaDaguaEdit.text == "Selecione uma marca d'água") {alert("Marca d'água não selecionada."); return;}
}

var pastaInicial = Folder(exportarDaPastaEdit.text);
var pastaFinal = Folder(exportarDaPastaEdit.text+'/ProjetosExportados_ALTA');
var procurarArquivos = pastaInicial.getFiles();
var arquivo = new File();

for (var i = 0; i < procurarArquivos.length; i++){
arquivo = procurarArquivos[i];
if (arquivo instanceof Folder) arquivo = procurarArquivos[i+1];
app.open(arquivo);

if(marcaDagua.value == true) inserirMarcaDagua();

var JPGquality = 10;
var saveFile = new File(pastaFinal.path + "/" + pastaFinal.name + "/" + arquivo.name.slice(0, -4)+'.jpg');
SaveJPEG(saveFile, JPGquality);

function SaveJPEG(saveFile, jpegQuality){  
var doc = activeDocument;  
if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) doc.bitsPerChannel = BitsPerChannelType.EIGHT;  
jpgSaveOptions = new JPEGSaveOptions();  
jpgSaveOptions.embedColorProfile = true;  
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
jpgSaveOptions.matte = MatteType.NONE;  
jpgSaveOptions.quality = jpegQuality;   
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);  
}

app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

}

}

function exportarBAIXAresolucao(){

if(marcaDagua.value == true){
if(EscolherMarcaDaguaEdit.text == "Selecione uma marca d'água") {alert("Marca d'água não selecionada."); return;}
}

var pastaInicial = Folder(exportarDaPastaEdit.text);
var pastaFinal = Folder(exportarDaPastaEdit.text+'/ProjetosExportados_BAIXA');
var procurarArquivos = pastaInicial.getFiles();
var arquivo = new File();

for (var i = 0; i < procurarArquivos.length; i++){

arquivo = procurarArquivos[i];
if (arquivo instanceof Folder) arquivo = procurarArquivos[i+1];
app.open(arquivo);

if(marcaDagua.value == true) inserirMarcaDagua();

var largura = 1080;
var altura = 1080;

if (activeDocument.height >= activeDocument.width) {
activeDocument.resizeImage(null,UnitValue(altura,"px"),null,ResampleMethod.BICUBIC);
activeDocument.resizeCanvas(null,UnitValue(altura,"px"),null,ResampleMethod.BICUBIC);
}else{
activeDocument.resizeImage(UnitValue(largura,"px"),null,null,ResampleMethod.BICUBIC);
activeDocument.resizeCanvas(UnitValue(largura,"px"),null,null,ResampleMethod.BICUBIC);
}

var JPGquality = 6;
var saveFile = new File(pastaFinal.path + "/" + pastaFinal.name + "/" + arquivo.name.slice(0, -4)+'.jpg');
SaveJPEG(saveFile, JPGquality);

function SaveJPEG(saveFile, jpegQuality){  
var doc = activeDocument;  
if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) doc.bitsPerChannel = BitsPerChannelType.EIGHT;  
jpgSaveOptions = new JPEGSaveOptions();  
jpgSaveOptions.embedColorProfile = true;  
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
jpgSaveOptions.matte = MatteType.NONE;  
jpgSaveOptions.quality = jpegQuality;   
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);  
}

app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 

}

}

function inserirMarcaDagua(){

app.preferences.rulerUnits = Units.PIXELS

var LarguraDoc = activeDocument.width;
var AlturaDoc = activeDocument.height;

var novaLargura = Number(LarguraDoc)/3;
var novaAltura = Number(AlturaDoc)/3;

var arquivoMarcaDagua = File(EscolherMarcaDaguaEdit.text);
app.open(arquivoMarcaDagua);

if (activeDocument.height >= activeDocument.width) {
activeDocument.resizeImage(null,UnitValue(novaAltura,"px"),null,ResampleMethod.BICUBIC);
activeDocument.resizeCanvas(null,UnitValue(novaAltura,"px"),null,ResampleMethod.BICUBIC);
}else{
activeDocument.resizeImage(UnitValue(novaLargura,"px"),null,null,ResampleMethod.BICUBIC);
activeDocument.resizeCanvas(UnitValue(novaLargura,"px"),null,null,ResampleMethod.BICUBIC);
}
app.activeDocument.selection.selectAll();
app.activeDocument.selection.copy();
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
var na1 = novaAltura;
var na2 = novaAltura*2;
var na3 = novaAltura*3;
var nl1 = novaLargura;
var nl2 = novaLargura*2;
var nl3 = novaLargura*3;

if(a1.value == true) {var bounds = [[0,0],[nl1,0],[nl1,na1],[0,na1]]; app.activeDocument.selection.select(bounds);};
if(a2.value == true) {var bounds = [[nl1,0],[nl2,0],[nl2,na1],[nl1,na1]]; app.activeDocument.selection.select(bounds);};
if(a3.value == true) {var bounds = [[nl2,0],[nl3,0],[nl3,na1],[nl2,na1]]; app.activeDocument.selection.select(bounds);};
if(a4.value == true) {var bounds = [[0,na1],[nl1,na1],[nl1,na2],[0,na2]]; app.activeDocument.selection.select(bounds);};
if(a5.value == true) {var bounds = [[nl1,na1],[nl2,na1],[nl2,na2],[nl1,na2]]; app.activeDocument.selection.select(bounds);};
if(a6.value == true) {var bounds = [[nl2,na1],[nl3,na1],[nl3,na2],[nl2,na2]]; app.activeDocument.selection.select(bounds);};
if(a7.value == true) {var bounds = [[0,na2],[nl1,na2],[nl1,na3],[0,na3]]; app.activeDocument.selection.select(bounds);};
if(a8.value == true) {var bounds = [[nl1,na2],[nl2,na2],[nl2,na3],[nl1,na3]]; app.activeDocument.selection.select(bounds);};
if(a9.value == true) {var bounds = [[nl2,na2],[nl3,na2],[nl3,na3],[nl2,na3]]; app.activeDocument.selection.select(bounds);};

app.activeDocument.paste(true);
app.activeDocument.selection.deselect();

if (app.activeDocument.activeLayer.opacity > 75) {
app.activeDocument.activeLayer.opacity = Math.round(app.activeDocument.activeLayer.opacity) -75;  
}

app.activeDocument.activeLayer.name = "Marca D'Água";

}

grupoEscolherMarcaDagua.enabled = false;
localMarca.enabled = false;
marcaDaguaPainel.enabled = false;
marcaDagua.onClick = function(){
grupoEscolherMarcaDagua.enabled = this.value;
localMarca.enabled = this.value;
marcaDaguaPainel.enabled = this.value;
}

var botoes = caixa.add('group');
var aplicar = botoes.add('button',undefined,'Aplicar');
var cancelar = botoes.add('button',undefined,'Cancelar');

function escreverXML(){

jD.open('w');
jD.writeln('<?xml version="1.0" encoding="utf-8" ?>')
jD.writeln('<templateCC>')
jD.writeln('<formatoAlbum>'+xml.formatoAlbum+'</formatoAlbum>')
jD.writeln('<numeroFotosVertical>'+xml.numeroFotosVertical+'</numeroFotosVertical>')
jD.writeln('<numeroFotosHorizontal>'+xml.numeroFotosHorizontal+'</numeroFotosHorizontal>')
jD.writeln('<numeroFotosQuadrado>'+xml.numeroFotosQuadrado+'</numeroFotosQuadrado>')
jD.writeln('<salvarTemplateEm>'+xml.salvarTemplateEm+'</salvarTemplateEm>')
jD.writeln('<marcaDagua>'+EscolherMarcaDaguaEdit.text+'</marcaDagua>')
jD.writeln('</templateCC>')
jD.close();

}

function abrirPasta(){

var bat = new File("/SPLASH.001/exec_calculadora.bat");

bat.open('w');
bat.writeln('start explorer.exe')
bat.close();
bat.execute();
$.sleep(1000);
bat.remove();

}

aplicar.onClick = function(){

if(exportarDaPastaEdit.text == 0){exportarDaPastaEdit.text = '~'; return;}

caixa.close();
caixa = null;//resolve o problema da caixa branca
delete caixa;//resolve o problema da caixa branca
$.gc ();//resolve o problema da caixa branca

escreverXML();
exportarParaPasta();
if(altaResolucao.value == true) exportarALTAresolucao();
if(baixaResolucao.value == true) exportarBAIXAresolucao();

}

cancelar.onClick = function(){
caixa.close(); 
caixa = null;
delete caixa;
$.gc ();
}

caixa.show();

},
};