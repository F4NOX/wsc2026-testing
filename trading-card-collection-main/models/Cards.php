<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "cards".
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $rarity
 * @property string|null $collection
 */
class Cards extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'cards';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'rarity', 'collection'], 'default', 'value' => null],
            [['name', 'rarity', 'collection'], 'string', 'max' => 255],
            [['name','rarity','collection'], 'required'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'rarity' => 'Rarity',
            'collection' => 'Collection',
        ];
    }

}
