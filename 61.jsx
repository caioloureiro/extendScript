$._ext_reposicionar={
run : function() {


if($.os.match(/windows/i) == null) {alert('Esta versão do SuperAlbum foi criada para Windows, instale a versão correta para seu computador.','Compatibilidade'); return; };

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

function freeTransform(){
var desc = new ActionDescriptor(); 
var ref = new ActionReference(); 
ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') ); 
desc.putReference( charIDToTypeID('null'), ref ); 
desc.putEnumerated( charIDToTypeID('FTcs'), charIDToTypeID('QCSt'), charIDToTypeID('Qcsa') ); 
var ldesc = new ActionDescriptor(); 
ldesc.putUnitDouble( charIDToTypeID('Hrzn'), charIDToTypeID('#Pxl'), 0.00001 ); 
ldesc.putUnitDouble( charIDToTypeID('Vrtc'), charIDToTypeID('#Pxl'), 0.00001 ); 
desc.putObject( charIDToTypeID('Ofst'), charIDToTypeID('Ofst'), ldesc ); 
desc.putUnitDouble( charIDToTypeID('Wdth'), charIDToTypeID('#Prc'),100.0000 ); 
desc.putUnitDouble( charIDToTypeID('Hght'), charIDToTypeID('#Prc'), 100.0000 ); 
executeAction( charIDToTypeID('Trnf'), desc, DialogModes.ALL ); 
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

retirarLink();
freeTransform();
adicionarLink();

},
};