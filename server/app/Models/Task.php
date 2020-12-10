<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $priority
 * @property int $status
 * @property string $created_at
 * @property string $updated_at
 */
class Task extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['title', 'description', 'priority', 'status', 'created_at', 'updated_at'];

    protected $casts = [
        'status' => 'boolean'
    ];

}
