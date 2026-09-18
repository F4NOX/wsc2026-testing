<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%cards}}`.
 */
class m260808_135603_create_cards_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%cards}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'rarity' => $this->string(),
            'collection' => $this->string(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%cards}}');
    }
}
