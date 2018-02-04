using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawn : MonoBehaviour {
    // Pipes
    public GameObject prefab;
    // Vertical displacement range
    public float randomTop = 3.3f;
    public float randomBottom = -2f;
    // Horizontal distance range
    public float minDistance = 4f;
    public float maxDistance = 6f;

    private float xDistance;
    private float spawnYPosition;

	// Use this for initialization
	void Start () {
        SpawnColumn();
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    private void SpawnColumn()
    {
        xDistance = Random.Range(minDistance, maxDistance);
        spawnYPosition = Random.Range(randomBottom, randomTop);
        Instantiate(prefab, new Vector2(xDistance, spawnYPosition), Quaternion.identity);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.GetComponent<Pipes>() != null)
        {
            SpawnColumn();
        }
    }
}
