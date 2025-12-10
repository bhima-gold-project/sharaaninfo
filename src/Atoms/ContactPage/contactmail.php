<?php

	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$ccemail = 'support@sharaaninfo.com';
		$phone=$_POST['number'];

		$userSubject=$_POST['usersubject'];
		$userMessage=$_POST['usermessage'];
		$messageHeader = "Hi,\n\nMy contact details are here below.";
		$footerMessage = "Thanking you \n".$name;

		
		$to='sales@sharaaninfo.com'; // Receiver Email ID
		// $subject='Store launch enquiry.';
		// $subject='HBR store anniversary offers enquiry.';
		$subject='A Form Was Submitted on Sharaan Infosystems Website';
		$message=$messageHeader."\n\nName  : ".$name."\n"."Email   : ".$email."\n"."Phone : ".$phone."\n"."Subject : ".$userSubject."\n"."Message : ".$userMessage."\n\n".$footerMessage;
		$headers="From: ".$email. "\r\n" ."Cc: ".$ccemail;
		if(mail($to, $subject, $message, $headers)){
			echo "<script>alert('Successfully Submitted');
			window.location.href = `https://sharaaninfo.com/contact/`;
			</script>";
			exit;
		}
		else{
			echo "Something went wrong! Please Try again";
		}
	}
?>