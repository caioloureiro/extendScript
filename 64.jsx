$._ext_espelhar={
run : function() {


if($.os.match(/windows/i) == null) {alert('Esta versão do SuperAlbum foi criada para Windows, instale a versão correta para seu computador.','Compatibilidade'); return; };

function ocultarLayer() {

app.activeDocument.activeLayer = app.activeDocument.layers.getByName('Bloco_de_Cor');
app.activeDocument.activeLayer.visible = !app.activeDocument.activeLayer.visible;

};

function renomearBackground2() {

app.activeDocument.activeLayer = app.activeDocument.layers.getByName('Background2');
activeDocument.activeLayer.name = 'Bloco_de_Cor';

};

function espelharDocumento(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Frst'));
desc1.putReference(charIDToTypeID('null'), ref1);
desc1.putEnumerated(charIDToTypeID('Axis'), charIDToTypeID('Ornt'), charIDToTypeID('Hrzn'));
executeAction(stringIDToTypeID('flip'), desc1, dialogMode);
};

function espelharCamada(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
desc1.putReference(charIDToTypeID('null'), ref1);
desc1.putEnumerated(charIDToTypeID('Axis'), charIDToTypeID('Ornt'), charIDToTypeID('Hrzn'));
executeAction(stringIDToTypeID('flip'), desc1, dialogMode);
};

function nextLayer(){

var doc = app.activeDocument;
var currentLayer = doc.activeLayer;

for(i=0; i < doc.layers.length; ){         
if(doc.layers[i] == currentLayer){
a=i;
//alert(a);
i = doc.layers.length;
}else{ i++; }
}


try{
//var nextLayer = doc.layers[a+1];//pra baixo
var nextLayer = doc.layers[a-1];//pra cima
}catch(e){
var nextLayer = doc.layers[doc.layers.length-1];
}  

doc.activeLayer = nextLayer;

}

function rastrearPularFX(enabled, withDialog) {

//if (app.activeDocument.activeLayer.kind == "LayerKind.SMARTOBJECT") { nextLayer(); }//Se for smart object remove a camada
if (app.activeDocument.activeLayer.kind == "LayerKind.SOLIDFILL") { nextLayer(); }//Se for content layer remove a camada
if (app.activeDocument.activeLayer.kind == "LayerKind.GRADIENTFILL") { nextLayer(); }//Se for content layer remove a camada
if (app.activeDocument.activeLayer.kind == "LayerKind.TEXT") { nextLayer(); }//Se for content layer remove a camada
if(activeDocument.activeLayer.name == "imagem_fundo") { nextLayer(); }//Se for Imagem de Fundo

};

function retirarLink(enabled, withDialog) {
if (enabled != undefined && !enabled) return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
desc1.putReference(charIDToTypeID('null'), ref1);
var desc2 = new ActionDescriptor();
desc2.putBoolean(charIDToTypeID('Usrs'), false);
desc1.putObject(charIDToTypeID('T   '), charIDToTypeID('Lyr '), desc2);
executeAction(stringIDToTypeID('set'), desc1, dialogMode);
};

function adicionarLink(enabled, withDialog) {
if (enabled != undefined && !enabled) return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
desc1.putReference(charIDToTypeID('null'), ref1);
var desc2 = new ActionDescriptor();
desc2.putBoolean(charIDToTypeID('Usrs'), true);
desc1.putObject(charIDToTypeID('T   '), charIDToTypeID('Lyr '), desc2);
executeAction(stringIDToTypeID('set'), desc1, dialogMode);
};

function executar(){
for(var a = 0; a <= numeroCamadas; a++){
rastrearPularFX();
retirarLink();
espelharCamada();
adicionarLink();
nextLayer();
}
}

var doc = app.activeDocument;
var numeroCamadas = doc.layers.length-1;
doc.activeLayer = doc.layers[numeroCamadas];
nextLayer();
rastrearPularFX();
espelharDocumento();

try{
executar();
}catch(e){
//alert(e);
}

try{
renomearBackground2();
}catch(e){
//alert(e);
}
ocultarLayer();
doc.activeLayer = doc.layers[0];

},
};