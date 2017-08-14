<?php

require_once __DIR__.'/../vendor/autoload.php';

use DrewM\MailChimp\MailChimp;
use Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__
));

$app['MAILCHIMP_API_KEY'] = 'e33aebb4452cf7467136620692dc605c-us14';
$app['MAILCHIMP_LIST_ID'] = '6a748148dc';

$app->get('/esencia-cocinas-bulthaup', function() use ($app) {
    return $app['twig']->render('index-es.html', array());
});

$app->get('/bulthaup-kitchens-essence', function() use ($app) {
    return $app['twig']->render('index-en.html', array());
});

$app->post('/checkform', function(Request $request) use ($app) {

    $email = addslashes($request->get('email'));
    $country = addslashes($request->get('country'));
    $region = addslashes($request->get('region'));
    $profession = addslashes($request->get('profession'));
    $newsletter = addslashes($request->get('subscribe'));

    $mailchimp = new MailChimp($app['MAILCHIMP_API_KEY']);

    $result = $mailchimp->post("lists/".$app['MAILCHIMP_LIST_ID']."/members", array(
        'email_address' => $email,
        'status' => 'subscribed',
        'merge_fields' => array(
            'COUNTRY' => $country,
            'REGION' => $region,
            'PROFESSION' => $profession,
            'NEWSLETTER' => $newsletter
        )
    ));

    return print_r($result);
});

$app->run();
