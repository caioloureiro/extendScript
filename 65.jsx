$._ext_gerarChave={
run : function() {


if($.os.match(/windows/i) == null) {alert('Esta versão do SuperAlbum foi criada para Windows, instale a versão correta para seu computador.','Compatibilidade'); return; };

var caixa = new Window('dialog','Gerar Chave');

var informe = caixa.add('staticText',undefined,'Informe seus dados para criação de sua chave de registro.');

var linhaNome = caixa.add('group');
linhaNome.alignment = 'right';
var nome = linhaNome.add('staticText',undefined,'Nome:');
var editNome = linhaNome.add('editText',undefined,'');
editNome.characters = 50;

var linhaEmail = caixa.add('group');
linhaEmail.alignment = 'right';
var email = linhaEmail.add('staticText',undefined,'Email:');
var editEmail = linhaEmail.add('editText',undefined,'');
editEmail.characters = 50;

var botoes = caixa.add('group');
botoes.alignment = 'center';
var enviar = botoes.add('button',undefined,'Enviar');
var cancelar = botoes.add('button',undefined,'Cancelar');
cancelar.onClick = function(){ caixa.close(); }

enviar.onClick = function(){

if(editNome.text == '') { alert('O campo "Nome" não pode ficar em branco.','Gerar Chave'); return; }
if(editEmail.text == '') { alert('O campo "Email" não pode ficar em branco.','Gerar Chave'); return; }
caixa.close();

var arquivo =  new File(app.preferencesFolder+"/9165812213Ps001");
arquivo.open('r');
var serial = arquivo.readln();
arquivo.close();

if($.os.match(/mac/i) == null) {
var vbs = new File('~/Desktop/chave.vbs');
vbs.open('w');
vbs.writeln('Set emailObj = CreateObject("CDO.Message")')
vbs.writeln('emailObj.From = "superalbumps@superalbum.com.br"')
vbs.writeln('emailObj.To = "superalbumps@superalbum.com.br"')
vbs.writeln('emailObj.Subject = "SuperAlbum Ps 1.0.1"')
vbs.writeln('emailObj.Textbody = "NOME: '+editNome.text+'"  & vbCRLF')
vbs.writeln('emailObj.Textbody = emailObj.Textbody & "EMAIL: '+editEmail.text+'" & vbCRLF')
vbs.writeln('emailObj.Textbody = emailObj.Textbody & "SERIAL: '+serial+'" & vbCRLF')
vbs.writeln('Set emailConfig = emailObj.Configuration')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.superalbum.com.br"')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2 ')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = false')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/sendusername") = "superalbumps@superalbum.com.br"')
vbs.writeln('emailConfig.Fields("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "SuperSenha2014ps"')
vbs.writeln('emailConfig.Fields.Update')
vbs.writeln('emailObj.Send')
vbs.writeln('If err.number = 0 then Msgbox "Chave gerada com sucesso. Você receberá a chave através do email informado em até 24h."')
vbs.close();
$.sleep(1000);
vbs.execute();
$.sleep(1000);
vbs.remove();
}

if($.os.match(/windows/i) == null) {

var arquivoMAC = new File('~/Desktop/GerarChaveSuperAlbumPs.txt');
arquivoMAC.open('w');
arquivoMAC.writeln('NOME: '+editNome.text)
arquivoMAC.writeln('EMAIL: '+editEmail.text)
arquivoMAC.writeln(serial)
arquivoMAC.close();

var emailMAC = new File('~/Desktop/emailSuperAlbumPs.txt');
emailMAC.open('w');
emailMAC.writeln('Por favor envie este arquivo em anexo para superalbumps@superalbum.com.br.')
emailMAC.close();

alert('Um arquivo foi criado em sua mesa. Por favor envie este arquivo em anexo para superalbumps@superalbum.com.br.\nVocê receberá a chave através do email informado em até 24h.');

}

}

caixa.show();

},
};