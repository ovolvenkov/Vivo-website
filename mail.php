
<?
require_once 'PHPMailer/PHPMailerAutoload.php';

//recaptcha
if (isset($_POST['recaptcha_response']) && !empty($_POST['recaptcha_response'])) {

	//Build POST request
	$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
	$recaptcha_secret = '6Ld0eMwZAAAAAAfJEENTvBV0nYUPNb0gGVk9CdOg';
	$recaptcha_response = $_POST['recaptcha_response'];

	//Make and decode POST request
	$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
	$recaptcha = json_decode($recaptcha);

	//Take action based on the score returned
	if ($recaptcha->score >= 0.5) {

	}else {
		//code
	}
}


$admin_email = array();
foreach ( $_POST["admin_email"] as $key => $value ) {
	array_push($admin_email, $value);
}

$form_subject = trim($_POST["form_subject"]); //тема письма

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';



$c = true;
$message = '';
foreach ( $_POST as $key => $value ) {
	if ( $value != ""  && $key != "admin_email" && $key != "form_subject" && $key != "recaptcha_response" && $key != "submit") {
		if (is_array($value)) {
			$val_text = '';
			foreach ($value as $val) {
				if ($val && $val != '') {
					$val_text .= ($val_text==''?'':', ').$val;
				}
			}
			$value = $val_text;
		}
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
		<td style='padding: 10px; width: auto;'><b>$key:</b></td>
		<td style='padding: 10px;width: 100%;'>$value</td>
		</tr>
		";
	}
}
$message = "<table style='width: 50%;'>$message</table>";


// От кого
$mail->setFrom('adm@' . $_SERVER['HTTP_HOST'], 'vivodistributorsinc.com');
 
// Кому
foreach ( $admin_email as $key => $value ) {
	$mail->addAddress($value);
}
// Тема письма
$mail->Subject = $form_subject;
 
// Тело письма
$body = $message;
// $mail->isHTML(true);  это если прям верстка
$mail->msgHTML($body);

// Приложения
/*if ($_FILES){
	foreach ( $_FILES['file']['tmp_name'] as $key => $value ) {
		$mail->addAttachment($value, $_FILES['file']['name'][$key]);
	}
}*/
$mail->send();
?>

