<?php

/** @var yii\web\View $this */

use yii\helpers\Html;

$this->title = 'My Yii Application';
$this->params['meta_description'] = 'A high-performance PHP framework best for developing web applications. Fast, secure, and professional.';
$this->params['meta_keywords'] = 'yii, yii2, php, framework, web application, high-performance';
?>
<div class="site-index">

    <h1>Welcome</h1>
    <p>to the Trading Card Collection system.

        <?php if (!Yii::$app->user->isGuest): ?>
            Go to cards to see cards
        <?php else: ?>
            Login to get started
        <?php endif; ?>
    </p>
</div>
