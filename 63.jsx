$._ext_pbVintage={
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

// Máscara de Nitidez
function step4(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(charIDToTypeID('Amnt'), charIDToTypeID('#Prc'), 60);
desc1.putUnitDouble(charIDToTypeID('Rds '), charIDToTypeID('#Pxl'), 1.2);
desc1.putInteger(charIDToTypeID('Thsh'), 0);
executeAction(stringIDToTypeID('unsharpMask'), desc1, dialogMode);
};

// Criar
function step5(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(charIDToTypeID('AdjL'));
desc1.putReference(charIDToTypeID('null'), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putEnumerated(stringIDToTypeID("presetKind"), stringIDToTypeID("presetKindType"), stringIDToTypeID("presetKindDefault"));
desc3.putInteger(charIDToTypeID('Rd  '), 40);
desc3.putInteger(charIDToTypeID('Yllw'), 60);
desc3.putInteger(charIDToTypeID('Grn '), 40);
desc3.putInteger(charIDToTypeID('Cyn '), 60);
desc3.putInteger(charIDToTypeID('Bl  '), 20);
desc3.putInteger(charIDToTypeID('Mgnt'), 80);
desc3.putBoolean(stringIDToTypeID("useTint"), false);
var desc4 = new ActionDescriptor();
desc4.putDouble(charIDToTypeID('Rd  '), 225.000457763672);
desc4.putDouble(charIDToTypeID('Grn '), 211.000671386719);
desc4.putDouble(charIDToTypeID('Bl  '), 179.001159667969);
desc3.putObject(stringIDToTypeID("tintColor"), stringIDToTypeID("RGBColor"), desc4);
desc2.putObject(charIDToTypeID('Type'), charIDToTypeID('BanW'), desc3);
desc1.putObject(charIDToTypeID('Usng'), charIDToTypeID('AdjL'), desc2);
executeAction(stringIDToTypeID('make'), desc1, dialogMode);
};

// Criar
function step6(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(charIDToTypeID('AdjL'));
desc1.putReference(charIDToTypeID('null'), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putEnumerated(stringIDToTypeID("presetKind"), stringIDToTypeID("presetKindType"), stringIDToTypeID("presetKindDefault"));
desc2.putObject(charIDToTypeID('Type'), charIDToTypeID('Crvs'), desc3);
desc1.putObject(charIDToTypeID('Usng'), charIDToTypeID('AdjL'), desc2);
executeAction(stringIDToTypeID('make'), desc1, dialogMode);
};

// Definir
function step7(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('AdjL'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
desc1.putReference(charIDToTypeID('null'), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(stringIDToTypeID("presetKind"), stringIDToTypeID("presetKindType"), stringIDToTypeID("presetKindCustom"));
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(charIDToTypeID('Chnl'), charIDToTypeID('Chnl'), charIDToTypeID('Cmps'));
desc3.putReference(charIDToTypeID('Chnl'), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(charIDToTypeID('Hrzn'), 0);
desc4.putDouble(charIDToTypeID('Vrtc'), 73);
list2.putObject(charIDToTypeID('Pnt '), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(charIDToTypeID('Hrzn'), 138);
desc5.putDouble(charIDToTypeID('Vrtc'), 136);
list2.putObject(charIDToTypeID('Pnt '), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(charIDToTypeID('Hrzn'), 255);
desc6.putDouble(charIDToTypeID('Vrtc'), 227);
list2.putObject(charIDToTypeID('Pnt '), desc6);
desc3.putList(charIDToTypeID('Crv '), list2);
list1.putObject(charIDToTypeID('CrvA'), desc3);
desc2.putList(charIDToTypeID('Adjs'), list1);
desc1.putObject(charIDToTypeID('T   '), charIDToTypeID('Crvs'), desc2);
executeAction(stringIDToTypeID('set'), desc1, dialogMode);
};

// Ocultar
function step8(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
list1.putReference(ref1);
desc1.putList(charIDToTypeID('null'), list1);
executeAction(stringIDToTypeID('hide'), desc1, dialogMode);
};

// Mostrar
function step9(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
list1.putReference(ref1);
desc1.putList(charIDToTypeID('null'), list1);
executeAction(stringIDToTypeID('show'), desc1, dialogMode);
};

// Ocultar
function step10(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
list1.putReference(ref1);
desc1.putList(charIDToTypeID('null'), list1);
executeAction(stringIDToTypeID('hide'), desc1, dialogMode);
};

// Mostrar
function step11(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
list1.putReference(ref1);
desc1.putList(charIDToTypeID('null'), list1);
executeAction(stringIDToTypeID('show'), desc1, dialogMode);
};

// Fechar
function step12(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
desc2.putBoolean(stringIDToTypeID("maximizeCompatibility"), true);
desc1.putObject(charIDToTypeID('As  '), stringIDToTypeID("largeDocumentFormat"), desc2);
desc1.putPath(charIDToTypeID('In  '), new File("~/AppData/Local/Temp"));
desc1.putInteger(charIDToTypeID('DocI'), 665);
desc1.putEnumerated(charIDToTypeID('Svng'), charIDToTypeID('YsN '), charIDToTypeID('Ys  '));
executeAction(stringIDToTypeID('close'), desc1, dialogMode);
};

// Atualizar Objetos Inteligentes
function step13(enabled, withDialog) {
if (enabled != undefined && !enabled)
return;
var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
executeAction(stringIDToTypeID('updatePlacedLayer'), undefined, dialogMode);
};

// Criar máscara de corte
function step14(enabled, withDialog) {
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
step4();      // Máscara de Nitidez
step5();      // Criar
step6();      // Criar
step7();      // Definir
step8();      // Ocultar
step9();      // Mostrar
step10();      // Ocultar
step11();      // Mostrar
step12();      // Fechar
step13();      // Atualizar Objetos Inteligentes
step14();      // Criar máscara de corte

},
};