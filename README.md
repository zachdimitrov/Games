# Unity 2D 

### 01. Basics

- Open project, select 2D 
- Project Browser - all files in the project, create folders
- Hierarchy - all game objects and their combinations
    - double click to center on object
    - create empty object to use like folder
- Inspector - all properties of selected game object
    - Transform - change position, rotation and scale
    - Settings of obect (size of camera is 1/2 of height)
    - Components - scripts, rigid body...
- Camera - at least 1 camera (we can have more)
    - Scene - add and manipulate objects
    - Game - camera proportions and preview window
- Layers - ways to separate objects
- Publishing builds
    - Build settings - and Build

**Game objects**
- everything is game object
- default components - Name, Tag, Layer, Transform
    - use Tag for selection
    - sorting layer - will order objects based on their order
- static option - object will not be calculated
- optional components
    - sprite
    - camera
    - animation
    - physics (rigid body 2D)
    - script

**Prefabs**
- create custom object that can be dublicated
- make folder "Prefabs" and drag object inside (from Hierarchy)
    - if blue than it is part of prefab
    - break prefab instance - detatch from prefab
- ctrl + D clone objects

### 02. Mathematics

**Vectors**

```c#
var vector = Vector2.one; // (1, 1)
var right = Vector2.right; // (1. 0)
var left = -Vector2.right;
var up = Vector2.up; // down -> -up
var velosity = velocity + gravity; // sum of vectors
var velosity = 0.7 * velosity; // scalar
var length = velosity.magnitude; // length of vector
var lengthSqrt = velosity.sqrMagnitude; // faser calculation of square length
var distance = Vector2.Distance(first, second); // find distance between 2 vectors
var normalized = position.normalized; // make length 1
var dotProduct = Vector2.Dot(position, speed); // check position between 2 vectors
var angle = Vector2.Angle(position, direction); // find angle between

Mathf.Clamp(10, 1, 3); // arrange numbers between
```

### 03. Physics

**Physics Components**

- `Rigidbody 2D` - gravity and forces will apply
    - do not change transform component from scripts
    - use only forces to transform object
    - use `is kinematic` to make object not moveable
    - at least one `collider` must have `rigid body`
- `Box Collider 2D` 
- `Circle Collider 2D` 
- `Polygon Collider 2D` 
- `Edge Collider 2D ` 
    - register collisions
    - both object need to have `collider`
    - one of the objects must have `rigid body`
    - can make invisible colliders
- `Is Trigger` 
    - Physics is not working bur Unity registeres it
    - Event can be catched and used in code
    - `OnTriggerEnter2D()`
    - `OnTriggerStay2D()`
    - `OnTriggerExit2D()`
- `Static Collider`
    - If collider does not have `Rigidbody` - **do not move!**

**Physics Materials**  

- Create material first - Assets -> Materials -> create
- Friction - coefficient
- Bounciness - from 0 - no bounce to 1 - full bounce

**Joints**

- Different types of joints
- Attach to object or point in space

### 04. Scripts

```c#
using UnityEngine;

// "this" is the game object that is manipulated
public class SpeedController: MonoBehaviour
{
    // if we know other game object, use this
    public GameObject gameObj; // shows in editor, can drag any game object
    public otherTransform gameObjTransform; // can get componet only from other object

    public float speed = 0.5f; // use public field for editor incpector
    private float movement; // does not show in editor
    private Rigidbody2D rb; // to use components

    private float offestX; // offset X between this and camera
    private float offestY; // offset Y between this and camera
    
    void Start() {
        // do something before start
        this.rb = this.GetComponent<Rigidbody2D>(); // gets the instantiated component, slow operation - do in start

        // find offset between this and camera
        this.offsetX = this.transform.position.x - Camera.main.transform.position.x;
        this.offsetY = this.transform.position.y - Camera.main.transform.position.y;
    }

    // do before every visualisation
    void Update() {
        // read input and direct changes to animation, time is not fixed
        var position = this.transform.position; // need to use local var
        position.x += speed; // change it
        this.transform.position = position; // and then set the transform

        // move camera with this
        var goPosition = Camera.main.transform.position;
        goPosition.x = this.transform.position.x + this.offsetX;
        goPosition.y = this.transform.position.y + this.offsetY;
        Camera.main.transform.position = goPosition;

        // If we do not know game object at first time, find it here
        var go = GameObject.FindWithTag("myTag"); // gets first
        var gos = GameObject.FindGameObjectsWithTags("myTag"); // gets all
    }

    void FixedUpdate() {
        // apply physics here, makes calculations between 0.02 sec fixed
        this.rb.AddForce(new Vector2(10, 15)); // change component

        Debug.Log(this.transform.position.x - this.gameObj.transform.position.x); // use other game object
    }
}
```
- can use different types - bool, int, lists, enumerations  
- can use custom class with `[Serializable]` attribute (shows public fields)  
- for private fields use `[SerializeField]` attribute

#### Code executions for different platforms

```c#
#if UNITY_EDITOR
    Debug.Log("Unity editor")
#elif UNITY_IPHONE
    Debug.Log("Unity iPhone")
#elif UNITY_ANDROID
    Debug.Log("Unity android")
#elif UNITY_STANDALONE_WIN
    Debug.Log("Other platform")
#endif
```

### 05. Read Input

- Buttons
- Input Axes (Horisintal, Vertical)
- Mouse movements
- Axelerometer, Gyroscope
- Keyboard
- use InputManager to setup inputs in editor

```c#
// this is not good, because not cross-platform
if(Input.GetKey(KeyCode.Space))
{
    Debug.Log("Space");
}

// use generic buttons - set them in editor
if(Input.GetButton("Fire1"))
{
    this.transform.position.Translate(new Vector2(0, 1));
}
```

### 06. Events

- Start
- Awake
- OnGUI
- OnMouseOver, OnMouseDown

### 07. Time Management

- If we multiply by `Time.DeltaTime` we can scale vectors
- this makes movement smooth

### 08. Destroy and Create game objects

- use prefabs (created in project)
- create empty game object with script used to instantiate new objects

```c#
public GameObject enemy; // add game object in editor

public void Start()
{
    var position = enemy.transform.position;
    position.x = 2.5f;
    position.y = 4.8f;
    enemy.transform.position = position;

    var go = Instantiate(enemy);
}

public void OnTriggerEnter2D(Collider2D other)
{
    Destroy(Other.gameObject, 1); // destroy after time seconds
}

public void Update()
{
}
```

### 09. Coroutines

- add for cycle that each iteration is done every frame

```c#
private spriteRend;

public void Start()
{
    this.spriteRend = this.GetComponent<SpriteRenderer>();
    StartCoroutine("Fade");
}

private IEnumerator Fade() 
{
    for(float i = 1; i > 0; i -= 0.01f )
    {
        var color = this.spriteRend.color;
        color.a -= i;
        this.spriteRend.color = color;
s
        yield return null; // executed every frame
        yield return new WaitForSeconds(0.1f); // executed after fixed time
    }
}
```

### 10. Other finctions

- `Invoke("LoadLevel", 3f);` - start method after certain time
- `Application.LoadLevel("WinScene");` - load another scene
- `Application.Quit();` - quit the Game
- `Time.timeScale = 0` - this will pause the game, set it to `1` to resume

#### Player Preferences - use to save and load

```c#
PlayerPrefs.HasKey("name");
PlayerPrefs.RemoveKey("name");

PlayerPrefs.SetInt("HiScore", this.score);
PlayerPrefs.GetInt("HiScore");

PlayerPrefs.SetFloat("name", value);
PlayerPrefs.GetFloat("name");
```

### 11. Better save and load - [Read article here](https://gamedevelopment.tutsplus.com/tutorials/how-to-save-and-load-your-players-progress-in-unity--cms-20934)

### 12. Best practices in Unity - [Read this article](http://devmag.org.za/2012/07/12/50-tips-for-working-with-unity-best-practices/)

### 13. Unity documentation - [Locaded here](https://docs.unity3d.com/Manual/index.html)