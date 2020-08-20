<?php

namespace App\Http\Controllers;

use App\Http\Resources\ToDoCollection;
use App\ToDo;
use Illuminate\Http\Request;

class ToDoController extends Controller
{
    /**
     * @var ToDo
     */
    private $todo;

    public function __construct(ToDo $todo)
    {
        $this->todo = $todo;
    }

    public function index()
    {
        $todos = $this->todo->all();

        return new ToDoCollection($todos);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $todo = $this->todo->create($data);

        return response()->json($todo);
    }

    public function show($id)
    {
        $todo = $this->todo->findOrFail($id);

        return response()->json($todo);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();

        $todo = $this->todo->findOrFail($id);
        $todo->update($data);

        return response()->json($todo);
    }

    public function destroy($id)
    {
        $todo = $this->todo->findOrFail($id);
        $todo->delete();

        return response()->json([
            'msg' => 'Your to-do has been deleted successfully'
        ]);
    }

}
