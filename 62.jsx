$._ext_pbNormal={
run : function() {


if($.os.match(/windows/i) == null) {alert('Esta versão do SuperAlbum foi criada para Windows, instale a versão correta para seu computador.','Compatibilidade'); return; };

// Camada por Cópia
function step1(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
executeAction(stringIDToTypeID('copyToLayer'), undefined, dialogMode);
};

// Converter em objeto inteligente
function step2(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
executeAction(stringIDToTypeID('newPlacedLayer'), undefined, dialogMode);
};

// Editar conteúdo
function step3(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
executeAction(stringIDToTypeID('placedLayerEditContents'), desc1, dialogMode);
};

// Definir
function step4(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('Lefx'));
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
desc1.putReference(charIDToTypeID('null'), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(charIDToTypeID('Scl '), charIDToTypeID('#Prc'), 333.333333333333);
var desc3 = new ActionDescriptor();
desc3.putBoolean(charIDToTypeID('enab'), true);
desc3.putEnumerated(charIDToTypeID('Md  '), charIDToTypeID('BlnM'), charIDToTypeID('Clr '));
desc3.putUnitDouble(charIDToTypeID('Opct'), charIDToTypeID('#Prc'), 100);
var desc4 = new ActionDescriptor();
desc4.putDouble(charIDToTypeID('Rd  '), 255);
desc4.putDouble(charIDToTypeID('Grn '), 255);
desc4.putDouble(charIDToTypeID('Bl  '), 255);
desc3.putObject(charIDToTypeID('Clr '), stringIDToTypeID("RGBColor"), desc4);
desc2.putObject(charIDToTypeID('SoFi'), charIDToTypeID('SoFi'), desc3);
desc1.putObject(charIDToTypeID('T   '), charIDToTypeID('Lefx'), desc2);
executeAction(stringIDToTypeID('set'), desc1, dialogMode);
};

// Fechar
function step5(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
desc2.putBoolean(stringIDToTypeID("maximizeCompatibility"), true);
desc1.putObject(charIDToTypeID('As  '), stringIDToTypeID("largeDocumentFormat"), desc2);
desc1.putPath(charIDToTypeID('In  '), new File("~/AppData/Local/Temp"));
desc1.putInteger(charIDToTypeID('DocI'), 539);
desc1.putEnumerated(charIDToTypeID('Svng'), charIDToTypeID('YsN '), charIDToTypeID('Ys  '));
executeAction(stringIDToTypeID('close'), desc1, dialogMode);
};

// Atualizar Objetos Inteligentes
function step6(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
executeAction(stringIDToTypeID('updatePlacedLayer'), undefined, dialogMode);
};

// Criar máscara de corte
function step7(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
desc1.putReference(charIDToTypeID('null'), ref1);
executeAction(stringIDToTypeID('groupEvent'), desc1, dialogMode);
};

step1();      // Camada por Cópia
step2();      // Converter em objeto inteligente
step3();      // Editar conteúdo
step4();      // Definir
step5();      // Fechar
step6();      // Atualizar Objetos Inteligentes
step7();      // Criar máscara de corte

},
};