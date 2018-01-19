using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstacleCloner : MonoBehaviour {
    public GameObject smallCirclePrefab;
    public GameObject smallCircleSpawnPoint;

    public GameObject smallSquarePrefab;
    public GameObject smallSquareSpawnPoint;

    public GameObject colorChangerPrefab;
    public GameObject colorChangerSpawnPoint;

    public GameObject pointPrefab;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.tag == "Spawn")
        {
            int ran = Random.Range(0, 2);

            if (ran == 0)
            {
                Instantiate(smallCirclePrefab, smallCircleSpawnPoint.transform.position,
                smallCircleSpawnPoint.transform.rotation);
                Instantiate(colorChangerPrefab, colorChangerSpawnPoint.transform.position, colorChangerSpawnPoint.transform.rotation);
                Instantiate(pointPrefab, smallCircleSpawnPoint.transform.position, smallCircleSpawnPoint.transform.rotation);
            }
            else if (ran == 1)
            {
                Instantiate(smallSquarePrefab, smallSquareSpawnPoint.transform.position,
                smallSquareSpawnPoint.transform.rotation);
                Instantiate(colorChangerPrefab, colorChangerSpawnPoint.transform.position, colorChangerSpawnPoint.transform.rotation);
                Instantiate(pointPrefab, smallSquareSpawnPoint.transform.position, smallSquareSpawnPoint.transform.rotation);
            }
        }
    }
}
