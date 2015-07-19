ALTER TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  image_url VARCHAR(300) NOT NULL
);


INSERT INTO dishes(name, image_url) VALUES ("Prime Rib", "http://www.digbypines.ca/wp-content/uploads/2013/09/Prime-Rib.jpg");

-- Display metadata for a given table...
-- insert the table name in on second last line

SELECT a.attnum
      ,a.attname                            AS name
      ,format_type(a.atttypid, a.atttypmod) AS typ
      ,a.attnotnull                         AS notnull
      ,coalesce(p.indisprimary, FALSE)      AS primary_key
      ,f.adsrc                              AS default_val
      ,d.description                        AS col_comment
FROM   pg_attribute    a
LEFT   JOIN pg_index   p ON p.indrelid = a.attrelid AND a.attnum = ANY(p.indkey)
LEFT   JOIN pg_description d ON d.objoid  = a.attrelid AND d.objsubid = a.attnum
LEFT   JOIN pg_attrdef f ON f.adrelid = a.attrelid  AND f.adnum = a.attnum
WHERE  a.attnum > 0
AND    NOT a.attisdropped
AND    a.attrelid = 'dishes'::regclass  -- table may be schema-qualified
ORDER  BY a.attnum;
