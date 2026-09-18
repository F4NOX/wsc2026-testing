<?php

use app\models\Cards;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\CardsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Cards';
$this->params['breadcrumbs'][] = $this->title;
$rarityTypes = [
    'Common' => 'Common',
    'Uncommon' => 'Uncommon',
    'Rare' => 'Rare',
    'Epic' => 'Epic',
    'Legendary' => 'Legendary',
    'Mythical' => 'Mythical',
];
$collections = Cards::find()->select('collection')->distinct()->column();
?>
<div class="cards-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Card', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'summary' => false,
        'filterModel' => $searchModel,
        'columns' => [
            [
                'attribute' => 'name',
                'filterInputOptions' => [
                    'placeholder' => 'Search By Name...',
                    'class' => 'form-control',
                ]
            ],
            [
                'attribute' => 'rarity',
                'filter' => $rarityTypes,
                'filterInputOptions' => [
                    'prompt' => 'Filter By Rarity...',
                    'class' => 'form-select',
                ]
            ],
            [
                'attribute' => 'collection',
                'filter' => array_combine($collections, $collections),
                'filterInputOptions' => [
                    'prompt' => 'Filter By Collection...',
                    'class' => 'form-select',
                ]
            ],
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Cards $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 },
                'buttons' => [
                    'update' => function ($url, $model, $key) {return;},
                    'delete' => function ($url, $model, $key) {return;},
                ]
            ],
        ],
    ]); ?>


</div>
