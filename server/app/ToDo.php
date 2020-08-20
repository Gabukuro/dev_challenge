<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    protected $table = 'todos';

    protected $fillable = [
        'category', 'is_complete', 'name',
        'due_by', 'cost', 'notes'
    ];
}
