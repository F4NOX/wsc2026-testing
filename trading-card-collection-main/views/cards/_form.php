<?php

use yii\helpers\Html;
use yii\bootstrap5\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Cards $model */
/** @var yii\widgets\ActiveForm $form */

$rarityTypes = [
    'Common' => 'Common',
    'Uncommon' => 'Uncommon',
    'Rare' => 'Rare',
    'Epic' => 'Epic',
    'Legendary' => 'Legendary',
    'Mythical' => 'Mythical',
]

?>

<div class="cards-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'rarity')->dropdownList($rarityTypes) ?>

    <?= $form->field($model, 'collection')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
